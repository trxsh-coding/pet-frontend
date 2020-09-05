import React, {useEffect, useState} from 'react';
import '../styles.scss'
import {UPDATE_FIELD} from "../../../../../store/types";
import {petActions} from "../../../../../store/modules/pet";
import {useDispatch} from "react-redux";
import editIcon from '../../../../../Assets/svg/edit.svg'


function InfoAnnotation(props) {
    const {type, gender, ages, breed, editable, id} = props;
    const dispatch = useDispatch();
    const [focus, setFocus] = useState(null);
    const onFieldUpdate = (value, field) => {
        setFocus(field)
        dispatch(petActions[UPDATE_FIELD]({value:value, key:id, map:'data', field:field}))
    }
    const RenderEditableInput = ({title, value, field}) =>
        <>
            {!editable ?
                <span className='light-span'> {value}</span> :
                <div className='flex-align-center'>
                    <input
                        autoFocus={focus === field}
                        value={value}
                        onChange={(e) => onFieldUpdate(e.target.value, field)}/>
                    <img src={editIcon} alt="editIcon" className='ml-10'/>
                </div>
            }

        </>

    return (
        <div className='flex-align-center mt-30 flex-align-stretch'>
            <div className='info-annotation mr-30 summary'>
                <div className='flex-column '>
                    <div>
                        <span className='font-16'>Общая информация</span>
                    </div>
                    <div className='pt-20 flex-align-center'>
                        <span className='font-14 '>Вид:</span>
                        <RenderEditableInput value={type} field='type'/>
                    </div>
                    <div className='pt-15 flex-align-center'>
                        <span className='font-14 '>Порода:</span>
                        <RenderEditableInput value={breed} field='breed' />
                    </div>
                    <div className='pt-15 flex-align-center'>
                        <span className='font-14 '>Пол:</span>
                        <RenderEditableInput value={gender} field='gender'/>
                    </div>
                    <div className='pt-15 flex-align-center'>
                        <span className='font-14 '>Возраст:</span>
                        <RenderEditableInput value={ages} field='ages' />
                    </div>

                </div>
            </div>
            <div className='info-annotation additional'>
                <div className='flex-column'>
                    <span className='font-16'>Дополнительная информация</span>
                    <span className='font-14 pt-20 light-weight'>Информация отсутствует</span>
                </div>
            </div>
        </div>
    );
}

export default InfoAnnotation;
