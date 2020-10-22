import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import React, {useContext, useEffect, useRef, useState} from "react";
import ReusableModal from "../../../Reusable/Modal";
import MissingCreateForm from "./annotation/missingCreateForm";
import {GET_LIST} from "../../../../store/types";
import {missingActions} from "../../../../store/modules/missings";
import {useDispatch, useSelector} from "react-redux";
import MissingAnnotation from "../Missing/annotation/missingAnnotation";
import ResponsiveContext from "../../../../Context/responsiveContext";
import plus from '../../../../Assets/svg/plus2.svg'
function MissingAds(props) {

    const [modal, setModal] = useState(false)
    const mobile = useContext(ResponsiveContext)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(missingActions[GET_LIST]())
    },[])
    const missings = useSelector( s => s.missing.data || [])
    const RenderMissingsMap = _ => Object.values(missings).map( el => {
        return Object.values(missings).length  && (
            <div key={el._id}>
                <MissingAnnotation
                    author={el.authorId}
                    reward={el.reward}
                    description={el.description}
                    title={el.title}
                    date={el.date}
                    id={el.id}
                />
            </div>
        )
    })
    const AddNewMissingBlock = _ => mobile &&
        <div style={{padding:'16px'}} className='flex-align-center flex-between' onClick={() => setModal(true)}>
            <span className='mr-15'>Добавить объявление</span>
            <img src={plus} alt="add-icon"/>
        </div>

    return (
        <ComponentWrapper title='Доска объявлений' withActionButton action={() => setModal(true)}>
            <ReusableModal visible={modal}
                           height='fit-content'
                           onClose={() => setModal(false)}
                           title='Создание объявления' >
                <MissingCreateForm />
            </ReusableModal>
            <AddNewMissingBlock />
            <RenderMissingsMap />
            </ComponentWrapper>
    )
}

export default MissingAds