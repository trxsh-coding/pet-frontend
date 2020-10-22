import React, {useCallback, useContext, useState} from 'react';
import '../styles.scss'
import ReusableButton from "../../../../Reusable/Button";
import {followPet, unfollowPet, updatePet} from "../../../../../store/modules/pet";
import {useDispatch} from "react-redux";
import {createRoom, getRoom, sendMessageWithRoom} from "../../../../../store/modules/chat";
import ReusableModal from "../../../../Reusable/Modal";
import ReusableForm from "../../../../Reusable/Form";
import ReusableInput from "../../../../Reusable/Input";
import cameraIcon from "../../../../../Assets/svg/camera.svg"
import ReusableUpload from "../../../../Reusable/Upload";
import ReusableImage from "../../../../Reusable/Image";
import {useHistory} from 'react-router-dom'
import {createPet} from "../../../../../store/modules/old/pet";
import {createPost} from "../../../../../store/modules/post";
import ResponsiveContext from "../../../../../Context/responsiveContext";
function ButtonSection(props) {
    const {
        current,
        id,
        followee,
        onEdit,
        editable,
        receiver,
        breed,
        ages,
        type
    } = props;
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState(null);
    const [url, setUrl] = useState(null)
    const [form, setForm] = useState({
        picture:null,
        description:'',
        authorId:id
    })
    const history = useHistory();
    const mobile = useContext(ResponsiveContext);
    const onPetUpdate = _ => {
        const result = dispatch(updatePet({breed, type, ages}, id))
        if(result) onEdit(false)
    }
    const onWriteAction = _ => dispatch(getRoom(receiver))
        .then( e => {
            typeof e === 'string' ? setModal(true) : history.push(`/chat/room/${e.id}`)
        })
    async function onPostCreate() {
        const result = await dispatch(createPost(form));
        if(result) history.push(`/post/${result}`)
    }
    function onFormChange(payload, key) {
        setForm(state => {
            return {
                ...state,
                [key]: payload
            }
        })
    }
    async function onChatCreate() {
        const result =  await dispatch(sendMessageWithRoom({receiver, description }))
        if(result) setModal(false)
    }
    const RenderModalDialog = _ => url ?
        <div className='upload-wrapper flex-align-center flex-center relative'
             style={{backgroundImage:"url("+url+")", backgroundSize:'cover'}}>
            <img src={cameraIcon} alt="camera-icon"/>
            <ReusableUpload withHover={false} action={(e) => setUrl(URL.createObjectURL(e))} />
        </div> :
        <div>
            <div className='relative'>
                <ReusableImage link={url} width={555} height={400}/>
            </div>
        </div>

    return !current ? (
        <div className='button-section mt-30 '>
            <ReusableModal visible={modal}
                           height='fit-content'
                           onClose={() => setModal(false)}
                           title='Написать сообщение'>
                <div className='flex-column flex-align-stretch flex-1'>
                    <ReusableInput
                        type='textarea'
                        styles={{width:'100%', marginTop:'20px'}}
                        fixedSize={150}
                        onChange={(e) => setDescription(e)}
                        value={description}/>
                    <ReusableButton styles={{marginTop:'20px', width:'100px'}} action={() => onChatCreate()}>
                        Отправить
                    </ReusableButton>
                </div>
            </ReusableModal>
            <ReusableButton styles={{marginRight:23}} action={() => onWriteAction()} >
                Написать
            </ReusableButton>
            {!followee?
                <ReusableButton action={() => dispatch(followPet(id))}>
                    Подписаться
                </ReusableButton> :
                <ReusableButton action={() => dispatch(unfollowPet(id))}>
                    Отписаться
                </ReusableButton>
            }
        </div>
    ) :
        <div className=' button-section pt-30 flex-column '>
            {!editable ?
                <div className='flex-column'>
                    <ReusableButton action={() => onEdit(true)}>
                        Редактировать
                    </ReusableButton>
                    <div className='create-post-button flex-align-center mt-30 pointer' onClick={() => setModal(true)}>
                        <img src={cameraIcon} alt="camera-icon"/> <span className='pl-15'>Добавить фотографии</span>
                    </div>
                    <ReusableModal visible={modal}
                                   onClose={() => setModal(false)}
                                   height='fit-content'
                                   styles={{position:'fixed', overflow:'hidden'}}
                                   title='Загрузка новой фотографии'>
                        <div className={`${mobile ? 'flex-1' : ''} flex-column`}>
                            <div className='upload-wrapper flex-align-center flex-center  mt-20 relative'
                                 style={{backgroundImage:"url("+url+")", backgroundSize:'cover', backgroundPosition:'center'}}
                            >
                                <img src={cameraIcon} alt="camera-icon"/>
                                <ReusableUpload withHover={false} action={(e) => {
                                    onFormChange(e, 'picture')
                                    e ? setUrl(URL.createObjectURL(e)) : setUrl(null)
                                }} />
                            </div>
                            {form.picture &&
                                <div className='mt-20 flex-column flex-align-center'>
                                    <ReusableInput
                                        styles={{width:'100%'}}
                                        onChange={(e) => onFormChange(e,'description')}
                                        value={form.description}
                                        type='textarea'
                                        fixedSize={106}
                                    />
                                    <div className='mt-20'>
                                        <ReusableButton styles={{padding:'10px 20px'}} action={() => onPostCreate()}>
                                            Опубликовать фото
                                        </ReusableButton>
                                    </div>
                                </div>

                            }
                        </div>

                    </ReusableModal>
                </div>

                 :
                <ReusableButton action={() => onPetUpdate()}>
                    Сохранить
                </ReusableButton>
            }
        </div>
}

export default ButtonSection;
