import React from "react";
import ReusableButton from "../../../Reusable/Button";
import '../style.scss'
import {useSelector} from "react-redux";

export const AnnotationInfo = (props) => {
    const {_id} = props;

    // const RenderButton = user.id
    const isCurrentUser = useSelector(s => s.user.current._id === _id);

    const CurrentUserButton = <ReusableButton styles={{marginRight:'23px'}}> Редактировать </ReusableButton>

    const ButtonsBlock =  (
        <>
            <ReusableButton styles={{marginRight:'23px'}}>
                Написать
            </ReusableButton>
            <ReusableButton>
                Подписаться
            </ReusableButton>
        </>
    );

    const RenderButtonsBlock = isCurrentUser ? CurrentUserButton : ButtonsBlock;

    return (
        <div className="annotation-info relative pt-50">
            <div className="button-block">
                {RenderButtonsBlock}
            </div>
        </div>
    )
};
