import React from 'react'
import './reusable.scss'
const ReusableBadge = (props) => {
    const {amount} = props;
    return (
        <div className='badge-wrapper flex-align-center flex-center'>
            <span>{amount}</span>
        </div>
    )
};

export default ReusableBadge;
