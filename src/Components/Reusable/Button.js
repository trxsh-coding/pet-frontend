import React, {useState} from 'react'
import Spinner from "./Spinner";

const ReusableButton = ({children, styles, action, submit, secondaryStyle = false, withLoading = true, disabled}) => {
    const [loading, setLoading] = useState(false)
    const buttonStyle = {
        backgroundColor: secondaryStyle ? '#ffffff' : '#4A76A8',
        padding:'8px 6px',
        border: secondaryStyle ? '0.5px solid #4A76A8' :'none',
        borderRadius:'5px',
        color:'#ffffff',
        minWidth:'120px',
        minHeight:'35px',
        cursor:'pointer',
        ...styles
    };


    const onActionClick = async () => {

        if(withLoading) setLoading(true)

        if(action) await action()

        if(withLoading) setLoading(false)


    }
    const RenderSpinner = ({loading}) => loading ?
        <div className='relative'><div className='transform-center'> <Spinner background={'#FFFFFF'}/> </div></div> :
        <span style={{fontWeight:"normal", color: secondaryStyle ? '#4A76A8' : '#ffffff'}}>{children}</span>
    return (
        <button onClick={() => loading || disabled ? null : onActionClick()} style={buttonStyle}>
            <RenderSpinner loading={loading}/>
        </button>
    )
};

export default ReusableButton;
