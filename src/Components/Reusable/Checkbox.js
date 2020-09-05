import React from 'react'
import './reusable.scss'
import checkIcon from '../../Assets/svg/checkbox.svg'
const ReusableCheckbox= (props) => {
    const {title, isChecked, value, handleChange} = props;
    return (
        <div className='flex-align-center'>
            <span className='font-16 light-weight pr-10'>{title}</span>
            <div className='checkbox-wrapper flex-align-center flex-center'
                 onClick={() => handleChange(value)}
            >
                {isChecked && <img src={checkIcon} alt='checkbox-icon'/>}
            </div>
        </div>
    )
};

export default ReusableCheckbox;
