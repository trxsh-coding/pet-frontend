import React from 'react';
import { withRouter } from 'react-router-dom'
import '../styles.scss'
import ReusableButton from "../../../../Reusable/Button";
import {followPet, unfollowPet} from "../../../../../store/modules/pet";
import {useDispatch} from "react-redux";

function ButtonSection(props) {
    const {current, id, followee, onEdit, editable} = props;
    const dispatch = useDispatch()
    return !current ? (
        <div className='button-section '>
            <ReusableButton styles={{marginRight:23}} >
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

export default withRouter(ButtonSection);
