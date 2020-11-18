import React from 'react'
import './style.scss'

const Spinner = ({background = "#4A76A8", isPrimaryStyle = true}) => {
    const SpinnerStyles = {
        background:background
    }
    return isPrimaryStyle ? (
        <div className="lds-ellipsis">
            <div style={SpinnerStyles}></div>
            <div style={SpinnerStyles}></div>
            <div style={SpinnerStyles}></div>
            <div style={SpinnerStyles}></div>
        </div>

    ) : (
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default Spinner;
