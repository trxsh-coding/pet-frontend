import React, {useContext, useEffect, useState} from 'react';
import ReusableUpload from "../../../../Reusable/Upload";
import '../style.scss'
import useForm from "../../../../../CustomHooks/useForm";
import ReusableButton from "../../../../Reusable/Button";
import {translateKeyword} from "../../../../../Constants";
import ReusableCheckbox from "../../../../Reusable/Checkbox";
import ReusableImage from "../../../../Reusable/Image";
import {createPet} from "../../../../../store/modules/old/pet";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import ResponsiveContext from "../../../../../Context/responsiveContext";
function CreationBody(props) {
    const {current} = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({})
    async function onSubmitEvent() {
        try {
            const result = await dispatch(createPet({...values, ...{ownerId:current}}));
            if(result.errors){
                setErrors({...result.errors})
            }else {
                history.push(`/pet/${result}`)
            }
        }catch (error) {
            console.log(error, 'response')
        }finally {

        }
    }
    console.log(errors)

    const form = { name:'', ages:'', breed:'', type:'', gender:'', avatar:''}
    const [values, handleChange, customStateChange, handleSubmit] = useForm(form, onSubmitEvent);
   const mobile = useContext(ResponsiveContext)
    const [imageUrl, setUrl] = useState(null);
    const InputList = _ => Object.keys(form).map( el => {
        return el !== 'gender' && el !== 'avatar' && (
            <div className='flex-column mr-30'>
                <span className='mb-10 font-16 light-weight'>{translateKeyword(el)}</span>
                <input type='text'
                       className='creation-input '
                       name={el}
                       value={values[el] || ""}
                       onChange={handleChange}
                       key={el}
                />
                <span className='validation-error'>{errors[el]}</span>
            </div>
        )
    })
     function onUpload(e) {
         setUrl(URL.createObjectURL(e))
         customStateChange({key:'avatar', value: e})

    }

    const CheckBoxList = _ => (
        <div>
            <span className='mb-10 font-16 light-weight'>Пол:</span>
            <div className='flex mt-15'>
                <div className='mr-10'>
                    <ReusableCheckbox
                        isChecked={values.gender === 'Мужской'}
                        handleChange={(e) => customStateChange({key:'gender', value:e})}
                        value={'Мужской'}
                        title='М'/>
                </div>
                <div className='mr-10'>
                    <ReusableCheckbox
                        title='Ж'
                        handleChange={(e) => customStateChange({key:'gender', value:e})}
                        value={'Женский'}
                        isChecked={values.gender === 'Женский'}/>
                </div>
            </div>
        </div>
    )
    return (
        <div className='body-wrapper mt-60 '>
            <form onSubmit={handleSubmit} className='creation-form'>
                <div>
                    <span>Добавить питомца</span>
                </div>
                <div className='mt-30'>
                <span>
                    Фотография:
                </span>
                    <div  className='add-picture-block relative mt-30'>
                        <ReusableImage size={130} rounded link={imageUrl}/>
                        <ReusableUpload  action={(e) => onUpload(e)}/>
                    </div>
                </div>
                <div className='mt-40 ' >
                    <span className='font-16 '>Личное:</span>
                    <div className={`${mobile ? 'flex-column' : 'flex'} flex-align-center mt-20`}>
                        {InputList()}
                        {CheckBoxList()}
                    </div>
                </div>
                <div className='mt-60'>
                    <ReusableButton>
                        Добавить
                    </ReusableButton>
                </div>
            </form>
        </div>
    )
}

export default CreationBody;
