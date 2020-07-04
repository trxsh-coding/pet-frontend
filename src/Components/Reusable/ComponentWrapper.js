import React from 'react'
import './reusable.scss'
const ComponentWrapper = ({children, styles, title}) => {
    return (
        <div className='component-wrapper'>
            <div className="wrapper-header" >
                <span>{title}</span>
            </div>
            <div className="wrapper-body">
                {children}
            </div>

        </div>
    )
};

export default ComponentWrapper;
