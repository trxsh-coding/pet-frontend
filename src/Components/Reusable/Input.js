import React, {useEffect, useRef} from 'react'
import send from '../../Assets/svg/send.svg'
import './reusable.scss'

const ReusableInput = (props) => {
    const {
        children,
        styles,
        action,
        onChange,
        value,
        type='input',
        placeholder='Описание',
        background='#f2f2f2',
        fixedSize
    } = props;
    const textareaStyle = {
        minHeight:fixedSize + 'px',
        maxHeight:fixedSize + 'px',
        background:background

    }
    const inputWrapperStyle = {
        flex:1,
        background,
        padding:'9px 15px 9px 10px',
        ...styles
    }
    const inputEl = useRef(null);
    useEffect(() => {
        
    }, [value])

    const onChangeAction = (e) => {
        inputEl.current.focus();
        inputEl.current.style.height= 'auto'
        inputEl.current.style.height= inputEl.current.scrollHeight + 'px'
        onChange(e)
    }
    const RenderChildrenIcon = _ => {
        return children ? null : <img src={send} width={16} height={17} style={{cursor:'pointer'}}/>
    }

    const onKeyPressAction = e => {
        if(e.key === 'Enter') action(e.target.value)
    }
    return (
        <div style={inputWrapperStyle} className='input-wrapper'>
            {type === 'textarea' ? <textarea
                onChange={(e) => onChangeAction(e.target.value)}
                ref={inputEl}
                onKeyPress={onKeyPressAction}
                className='input-textarea'
                rows={1}
                style={textareaStyle}
                placeholder={placeholder}
                defaultValue=""
            /> :
                <input
                    style={{background:background}}
                    onChange={(e) => onChange(e.target.value)}
                    className='reusable-input'
                    placeholder={placeholder}
                    value={value}
                    onKeyPress={onKeyPressAction}
                />
            }
            {children ?
                <div onClick={() => action()}><RenderChildrenIcon/></div> :
                children
            }
        </div>
    )
};

export default ReusableInput;
