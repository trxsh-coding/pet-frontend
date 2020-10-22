import React, {useContext, useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import MissingAnnotation from "./annotation/missingAnnotation";
import './styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {missingActions} from "../../../../store/modules/missings";
import {GET_BY_ID} from "../../../../store/types";
import MissingsImagesMap from "./layout/missingImageMap";
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import ReusableMap from "../../../Reusable/Map";
import ReusableButton from "../../../Reusable/Button";
import ResponsiveContext from "../../../../Context/responsiveContext";
import HeaderContext from "../../../../Context/headerContext";
function Missing(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const {match} = props;
    const {id} = match.params;
    const item = useSelector( s => s.missing.data[id] || {})
    const [response, setResponse] = useState(false)
    useEffect(() => {
        dispatch(missingActions[GET_BY_ID](id))
    }, [])
    const mobile = useContext(ResponsiveContext)
    const headerAction = useContext(HeaderContext)
    console.log(headerAction)
    function onEmailSendAction() {
        window.open(`mailto:${item.authorId.email}`);
    }
    function onCallPhoneAction() {
        window.open(`tel:${item.authorId.phone}`)
    }


    const RenderDescriptionBlock = _ =>
        <div className='flex-column text-center mt-30'>
            <span>Информация</span>
            <span className='light-weight mt-15'>{item.description}</span>
        </div>


    const RenderMainContentBlock = _ =>
        <div className='flex-align-start  flex-between missing-main-content'>
            <div className='images-map'><MissingsImagesMap images={item.images}/></div>
            <div className='missing-map flex-align-center'><ReusableMap lng={item.coordinates}/></div>
        </div>


    const RenderTitleBlock = _ =>
        <div className='mb-20 text-center'>
            <span className='font-24 text-center'>{item.title}</span>
        </div>


    const RenderRewardBlock = _ =>
        <div className='mt-20'>
            <span className='font-20'>Вознаграждение:</span> <span style={{color:'#43B05C'}}>{item.reward}</span>
        </div>


    const RenderUnvisibleButtonBlock = _ => response &&
        <div className={`${mobile ? 'flex-column' : 'flex'} flex-between mt-20 buttons-block`}>
            <ReusableButton secondaryStyle>
                Написать сообщение
            </ReusableButton>
            {item.authorId.phone &&
                <ReusableButton secondaryStyle action={() => onCallPhoneAction()}>
                    <div className='flex-column'>
                        <span>{item.authorId.phone}</span>
                        <span> Позвонить </span>
                    </div>
                </ReusableButton>
            }
            <ReusableButton secondaryStyle action={() => onEmailSendAction()}>
                <div className='flex-column'>
                    <span>Отправить email</span>
                    <span>{item.authorId.email}</span>
                </div>
            </ReusableButton>
        </div>
    return Object.keys(item).length && (
        <ComponentWrapper title='Объявление'>
            <div className='missing-wrapper'>
                <RenderTitleBlock />

                <RenderMainContentBlock />

                <RenderDescriptionBlock />

                <RenderRewardBlock />

                <RenderUnvisibleButtonBlock />

                <div className='flex flex-center mt-30'>
                    <ReusableButton
                        action={() => setResponse(true)}>
                        Отозваться
                    </ReusableButton>
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default Missing