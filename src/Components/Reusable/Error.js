import React from 'react'
import './reusable.scss'
const ReusableError = (props) => {
    const {error} = props;
    return visible ? (
        <div className='dropdown' onClick={() => action(true)}>
            <div className='flex-column pointer'
            >
                {children}
            </div>
        </div>
    ) : null
};

export default ReusableDropdown;
