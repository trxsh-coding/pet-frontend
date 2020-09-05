import React from 'react'
import './reusable.scss'
const ComponentWrapper = ({children, styles, title, width='100%'}) => {
    const wrapperStyle = {
        width:width + 'px',
        ...styles
    }
    return (
        <div className='component-wrapper' style={wrapperStyle}>
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
