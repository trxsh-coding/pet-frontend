import React from 'react'
import './reusable.scss'
const ReusableDropdown = (props) => {
    const {children, visible, action} = props;
    return visible ? (
        <div className='dropdown' onClick={() => action(true)}>
            <div className='flex-column'
            >
                {children}
            </div>
        </div>
    ) : null
};

export default ReusableDropdown;
