import React from 'react'
import './reusable.scss'
const ReusableDropdown = (props) => {
    const {children, visible, action} = props;
    return visible ? (
        <div className='dropdown'>
            <div className='flex-column'
                 onMouseOver={() => action(true)}
                 onMouseLeave={() => action(false)}
            >
                {children}
            </div>
        </div>
    ) : null
};

export default ReusableDropdown;
