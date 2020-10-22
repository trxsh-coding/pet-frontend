import React from 'react'

const ReusableButton = ({children, styles, action, submit, secondaryStyle = false}) => {
    const buttonStyle = {
        backgroundColor: secondaryStyle ? '#ffffff' : '#4A76A8',
        padding:'8px 6px',
        border: secondaryStyle ? '0.5px solid #4A76A8' :'none',
        borderRadius:'5px',
        color:'#ffffff',
        minWidth:'120px',
        cursor:'pointer',
        ...styles
    };

    return (
        <button onClick={action} style={buttonStyle}>
            <span style={{fontWeight:"normal", color: secondaryStyle ? '#4A76A8' : '#ffffff'}}>{children}</span>
        </button>
    )
};

export default ReusableButton;
