import React from 'react';
import PropTypes from 'prop-types';
import useForm from "../../CustomHooks/useForm";
import ReusableButton from "./Button";
import {translateKeyword} from "../../Constants";


export const ReusableForm = (props) => {

    const {
        form,
        addStyles,
        onSubmit,
        primary,
        children,
        errors,
        buttonText = "Войти"
    } = props;

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        ...addStyles
    };
    const secondaryStyle = {
        backgroundColor: 'transparent',
        border: '0.5px solid #ffffff',
        color: "#ffffff",
        padding: '10px 5px',
        marginBottom: errors ? '10px' : '20px'
    };
    const primaryStyle = {
        backgroundColor: 'transparent',
        border: '0.5px solid #E5E5E5',
        color: "#000",
        padding: '10px 5px',
        marginBottom: errors ? '10px' : '20px'

    };
    const calculateTypeOfField = type => {
        switch (type) {
            case 'password':
            case 'passwordConfirm':
                return 'password'
            case 'description':
                return 'textarea'
            default:
                return 'text'
        }
    }


    const onSubmitEvent = () => {
        onSubmit(values)
    };

    const [values, handleChange, customStateChange, handleSubmit] = useForm(form, onSubmitEvent);


    const inputList = _ => {
        return Object.keys(form).map((el, index) => {

            return (
                <React.Fragment key={index}>
                    <div className='flex-column'>
                        <input type={calculateTypeOfField(el)}
                               style={primary ? primaryStyle : secondaryStyle}
                               name={el}
                               value={values[el] || ""}
                               onChange={handleChange}
                               placeholder={translateKeyword(el)}
                               key={el}
                        />
                        {errors && <span style={{fontSize: '12px', color: '#a90000'}}>{errors[el]}</span>}
                    </div>
                </React.Fragment>
            )
        })
    };

    return (
        <>
            <form style={{...formStyle}} onSubmit={handleSubmit}>
                {inputList()}
                {children}
                <ReusableButton>
                    {buttonText}
                </ReusableButton>
            </form>
        </>
    );
};

ReusableForm.propTypes = {
    form: PropTypes.object.isRequired,
    buttonText: PropTypes.string,
    addStyles: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object,
};

export default ReusableForm;
