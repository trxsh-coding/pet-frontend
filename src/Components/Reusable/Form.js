import React from 'react';
import PropTypes from 'prop-types';
import useForm from "../../CustomHooks/useForm";
import ReusableButton from "./Button";
import {translateKeyword} from "../../Constants";



export const ReusableForm = ({form, addStyles, onSubmit, primary}) => {

    const onSubmitEvent = () => {
        onSubmit(values)
    };

    const [values, handleChange, handleSubmit] = useForm(form, onSubmitEvent);

    const formStyle = {
        display:'flex',
        flexDirection:'column',
        ...addStyles
    };
    const secondaryStyle = {
      backgroundColor:'transparent',
      border: '0.5px solid #ffffff',
      color:"#ffffff",
      padding:'10px 5px',
      marginBottom:'20px'
    };
    const primaryStyle = {
        backgroundColor:'transparent',
        border: '0.5px solid #E5E5E5',
        color:"#000",
        padding:'10px 5px',
        marginBottom:'20px'
    };
    const inputList = _ => {
        return Object.keys(form).map( el => {
            return (
                <input type="text"
                       style={primary ? primaryStyle : secondaryStyle}
                       name={el}
                       value={values[el] || ""}
                       onChange={handleChange}
                       placeholder={translateKeyword(el)}
                       key={el}
                />
            )
        })
    };

    return (
        <>
            <form style={{...formStyle}} onSubmit={handleSubmit}>
                {inputList()}
                <ReusableButton >
                    Отправить
                </ReusableButton>
            </form>
        </>
    );
};

ReusableForm.propTypes = {
    form: PropTypes.object.isRequired
};

export default ReusableForm;
