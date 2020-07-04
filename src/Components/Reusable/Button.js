import React from 'react'

const ReusableButton = ({children, styles, action, submit}) => {
    const buttonStyle = {
        backgroundColor: '#4A76A8',
        padding:'8px 6px',
        border:'none',
        borderRadius:'5px',
        color:'#ffffff',
        minWidth:'120px',
        ...styles
    };

    return (
        <button onClick={action} style={buttonStyle}>
            <span>{children}</span>
        </button>
    )
};

export default ReusableButton;
