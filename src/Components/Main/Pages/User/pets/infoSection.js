import React, {useEffect, useState} from 'react';
import ReusableButton from "../../../../Reusable/Button";
import '../styles.scss'
import ReusableImage from "../../../../Reusable/Image";
import ReusableModal from "../../../../Reusable/Modal";
import settingsIcon from '../../../../../Assets/svg/settings.svg'
import editIcon from '../../../../../Assets/svg/edit.svg'
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import {updateUser, userActions} from "../../../../../store/modules/user";
import {petActions} from "../../../../../store/modules/pet";
import {UPDATE_FIELD} from "../../../../../store/types";
import {normalizeTime} from "../../../../../Utils/timestamp";
function UserInfoSection(props) {
    const {current, city='', pets, phone='', currentId, online, lastSeen, about} = props;
    const [visible, setVisible] = useState(false)
    const [editable, setEditable] = useState(false)
    const [focus, setFocus] = useState(null);
    const dispatch = useDispatch()
    const history = useHistory()
    function onUpdate() {
        dispatch(updateUser({city, phone, about}, currentId))
        setEditable(false)
    }

    const RenderUserButton = _ => current ?
        <RenderEditButton /> :
        <ReusableButton>Написать</ReusableButton>
    const PetList = _ => pets.map( el => {
        return (
            <RenderPetBlock pet={el} />
        )
    })

    const EditButton = _ => (
        <ReusableButton styles={{width:'187px'}} action={() => setEditable(true)}>
            <div className='flex-align-center flex-center'>
                <img src={settingsIcon} alt="settingsIcon" className='mr-10'/>
                <span>Редактировать</span>
            </div>
        </ReusableButton>
    )

    const SaveButton = _ => (
        <ReusableButton styles={{width:'187px'}} action={() => onUpdate()}>
            <div className='flex-align-center flex-center'>
                <img src={settingsIcon} alt="settingsIcon" className='mr-10'/>
                <span>Сохранить</span>

            </div>
        </ReusableButton>
    )
    const RenderEditButton = _ => editable ? <SaveButton /> : <EditButton />
    const RenderPetBlock = ({pet})=> {
        const {avatar} = pet;
        return (
                <div className=' flex-align-center mt-20' onClick={() => history.push(`/pet/${pet.id}`)}>
                    <ReusableImage link={avatar} rounded size={40} fromServer/>
                    <span className='pl-15 light-weight font-16'>{pet.name}</span>
                </div>
        )
    }
    const RenderAboutSection = _ => {
        return (
            <div className=' about-section  '>
                <span>Дополнительная информация</span>
                {!editable ?
                    <div className='mt-20'><span>{about}</span></div> :
                    <div>
                        <EditInput value={about} field={'about'}/>
                    </div>
                }
            </div>
        )
    }
    const RenderOnlineBlock = _ => online ? <span style={{fontWeight:500, color:'#5dbb5d'}}>В сети</span> : <span>{normalizeTime(lastSeen)}</span>
    const onFieldUpdate = (value, field) => {
        setFocus(field)
        dispatch(userActions[UPDATE_FIELD]({value:value, key:currentId, map:'data', field:field}))
    }
    const EditInput = ({value, field}) => {
        return (
            <>
                <input
                       autoFocus={focus === field}
                       value={value}
                       onChange={(e) => onFieldUpdate(e.target.value, field)}
                />
                <img src={editIcon} alt="edit-icon"/>
            </>
        )
    }
    const RenderInfoBlock = ({value, field}) => editable ? <EditInput value={value} field={field}/> : <span>{value}</span>
    const PetModalList = _ => pets.map(el => (
       <div className='flex-align-center flex-column flex-between pointer' onClick={() => history.push(`/pet/${el.id}`)}>
           <ReusableImage link={el.avatar} size={100} rounded fromServer/>
           <span style={{color:'#4A76A8'}} className='font-16 mt-10'>{el.name}</span>
       </div>

    ))

    const RenderAddPetBlock = _ => {
        return editable ?
            <div className='user-pet-block flex-column mt-50'>
                <span>Питомцы</span>
                <div className='mt-20 flex-align-center pointer' onClick={() => history.push('/add-pet')}>
                    <div className='add-pet-item' />
                    <span className='pl-15 light-weight font-16'>Добавить</span>
                </div>
            </div> :
            <RenderPetSection />
    }

    const RenderPetSection = _ => {
        return (
            <div className='user-pet-block flex-column mt-50'>
                <span>Питомцы</span>
                { pets && pets.length <= 2 ?
                    <PetList /> : (
                        <>
                            <RenderPetBlock pet={pets[0]}/>
                            <div className='flex-align-center mt-20'>
                                <div className='pet-modal-item pointer' onClick={() => setVisible(true)}>
                                    <span>
                                        + {pets.length - 1}
                                    </span>
                                </div>
                                <span className='light-weight font-16 pl-15 pointer'>Смотреть всех</span>
                            </div>
                        </>
                    )
                }
            </div>
        )
    }
    return (
        <div className='user-info-section '>
            <div className='user-info mt-95 flex-column flex-align-center mr-50'>
                <RenderUserButton />
                {city &&
                    <div className='flex-align-center mt-20'>
                        <span className=''>Город:</span>
                        <RenderInfoBlock value={city} field={'city'}/>
                    </div>
                }
                {phone &&
                    <div className='flex-align-center mt-20'>
                        <span >Телефон:</span>
                        <RenderInfoBlock value={phone} field={'phone'}/>
                    </div>
                }
                <div className='flex-align-center mt-20'>
                    <RenderOnlineBlock />
                </div>
            </div>
            <RenderAddPetBlock />
            <RenderAboutSection />
            <ReusableModal
                title='Питомцы'
                visible={visible}
                onClose={() => setVisible(false)}
                styles={{height:'468px'}}
            >
                <div className='flex pets-modal'>
                    <PetModalList />
                </div>
            </ReusableModal>
        </div>
    )
}

export default UserInfoSection;
