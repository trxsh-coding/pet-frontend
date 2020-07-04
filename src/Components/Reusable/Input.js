import React from 'react'
import send from '../../Assets/svg/send.svg'
import './reusable.scss'
const ReusableInput = ({children, styles, action, onChange,  value}) => {
    const inputWrapperStyle = {
        flex:1,
        padding:'9px 15px 9px 10px',
        ...styles
    }
    const inputStyle = {

    };
    const RenderChildrenIcon = _ => {
        return children ? null : <img src={send} width={16} height={17} style={{cursor:'pointer'}}/>
    }
    const onKeyPressAction = e => {
        if(e.key === 'Enter') action()
    }
    return (
        <div style={inputWrapperStyle} className='input-wrapper'>
            <input
                onChange={(e) => onChange(e.target.value)}
                className='reusable-input'
                value={value}
                onKeyPress={onKeyPressAction}
            />
            <div onClick={() => action()}><RenderChildrenIcon/></div>
        </div>
    )
};

export default ReusableInput;
