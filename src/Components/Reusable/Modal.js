import React from 'react'
import './reusable.scss'
import close from '../../Assets/svg/Close.svg'
const ReusableModal = ({children, styles, onClose, title, visible}) => {
    const windowStyle = {
        width:'945px',
        height:'661px',
        backgroundColor:'#fff',
        borderRadius:'5px',
        zIndex:100,
        ...styles,
    };
    return visible ? (
       <div className='modal-wrapper'>
           <div className='modal-overlay' onClick={onClose}/>
           <div className="modal-window flex-column" style={windowStyle}>
               <div className="modal-header">
                   <img src={close} width='25px' height='25px' alt='close' className='header-close-icon'/>
                   <span className='pl-10 flex-center'>{title}</span>
               </div>
               <div className="modal-child">
                   {children}
               </div>
           </div>
       </div>
    ) : null
};

export default ReusableModal;
