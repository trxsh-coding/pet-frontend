import React, {useEffect, useState} from 'react';
import '../styles.scss'
import {UPDATE_FIELD} from "../../../../../store/types";
import {petActions} from "../../../../../store/modules/pet";
import {useDispatch} from "react-redux";



function InfoAnnotation(props) {
    const {type, gender, ages, editable, id} = props;
    const dispatch = useDispatch();
    const [focus, setFocus] = useState(null);
    const onFieldUpdate = (value, field) => {
        setFocus(field)
        dispatch(petActions[UPDATE_FIELD]({value:value, key:id, map:'data', field:field}))
    }
    const RenderEditableInput = ({title, value, field}) =>
        <div>
            <span>{title}:</span>
            {!editable ?
                <span className='light-span'> {value}</span> :
                <input
                    autoFocus={focus === field}
                    value={value}
                    onChange={(e) => onFieldUpdate(e.target.value, field)}/> }
        </div>

    return (
        <div className='info-annotation'>
            <div className='summary'>
                <span>Общая информация</span>
                <RenderEditableInput title={'Порода'} value={type} field='type'/>
                <RenderEditableInput title={'Пол'} value={gender} field='gender'/>
                <RenderEditableInput title={'Возраст'} value={ages} field='ages'/>

            </div>
            <div className="ml-30 hr-block" />
            <div className='additional-info flex-column ml-30'>
                <span className={'mb-10'}>Дополнительная информация</span>
                <span className='light-span'> Информация отсутствует</span>
            </div>
        </div>
    );
}

export default InfoAnnotation;
