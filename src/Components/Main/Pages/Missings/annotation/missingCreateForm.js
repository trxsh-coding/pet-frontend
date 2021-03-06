import React, {useContext, useState} from "react";
import ReusableMapAutocomplete from "../../../../Reusable/MapAutocomplete";
import ReusableMap from "../../../../Reusable/Map";
import useForm from "../../../../../CustomHooks/useForm";
import {createPet} from "../../../../../store/modules/old/pet";
import '../styles.scss'
import MissingsImagesUpload from "./missingImagesUpload";
import InputSection from "./inputsBlock";
import ReusableButton from "../../../../Reusable/Button";
import {useDispatch} from "react-redux";
import {createMissing} from "../../../../../store/modules/missings";
import ResponsiveContext from "../../../../../Context/responsiveContext";
import {useHistory} from 'react-router-dom'

const form = {
    reward: '',
    coordinates: '',
    address: '',
    description: '',
    title: '',
    images: [null, null, null, null]
}

function MissingCreateForm() {

    const [lng, setLng] = useState(null)
    const [values, handleChange, customStateChange, handleSubmit] = useForm(form, onSubmitEvent);
    const [errors, setErrors] = useState(null)
    const history = useHistory();
    const dispatch = useDispatch()

    async function onSubmitEvent(e) {
        const id = await dispatch(createMissing(values))
            .then(r => {
                if (r.errors) setErrors(r.errors)
                else history.push(`/missing/${r}`)
            })
    }

    const mobile = useContext(ResponsiveContext)
    return (
        <div className='missing-form flex-column mt-20 flex-center'>
            <form onSubmit={handleSubmit}>
                <div className={`flex-align-center ${mobile ? 'flex-column' : 'flex'}`}>
                    <div className='images-block'>
                        <MissingsImagesUpload
                            upload={(index, e) => customStateChange({key: 'images', value: e, index: index})}/>
                        <span className='error-span'>{errors?.images}</span>
                    </div>
                    <div className='location-block self-start'>
                        <ReusableMapAutocomplete action={(e, address) => {
                            customStateChange({key: 'coordinates', value: [e.lat, e.lng]})
                            customStateChange({key: 'address', value: address})
                        }}/>
                        {values.coordinates && <ReusableMap lng={values.coordinates}/>}
                        <span className='error-span'>{errors?.coordinates}</span>
                    </div>
                </div>
                <InputSection
                    action={(type, value) => customStateChange({key: type, value: value})}
                    errors={errors}
                />
                <ReusableButton>
                    Создать объявление
                </ReusableButton>
            </form>

        </div>
    )
}

export default React.memo(MissingCreateForm)