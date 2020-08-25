import React, {useCallback, useState} from 'react';
import history from "../../../../../services/history"
import '../styles.scss'
import ReusableButton from "../../../../Reusable/Button";
import {followPet, unfollowPet} from "../../../../../store/modules/pet";
import {useDispatch} from "react-redux";
import {createRoom, getRoom} from "../../../../../store/modules/chat";
import ReusableModal from "../../../../Reusable/Modal";
import ReusableForm from "../../../../Reusable/Form";
import ReusableInput from "../../../../Reusable/Input";

function ButtonSection(props) {
    const {current, id, followee, onEdit, editable, receiver} = props;
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState(null);
    const onWriteAction = _ => dispatch(getRoom(receiver))
        .then( e => {
            typeof e === 'string' ? setModal(true) : history.push(`/chat/room/${e.id}`)
        })

    return !current ? (
        <div className='button-section '>
            <ReusableModal visible={modal}
                           onClose={() => setModal(false)}
                           title='Написать сообщение'>
                <ReusableInput
                    type='textarea'
                    onChange={(e) => setDescription(e)}
                    value={description}/>
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
        <div>
            {!editable ?
                <ReusableButton action={() => onEdit(true)}>
                    Редактировать
                </ReusableButton> :
                <ReusableButton action={() => onEdit(false)}>
                    Сохранить изменения
                </ReusableButton>
            }
        </div>
}

export default ButtonSection;
