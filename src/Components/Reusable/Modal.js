import React from 'react'
import './reusable.scss'
const ReusableModal = ({children, styles, onClose, title, visible}) => {
    const windowStyle = {
        width:'600px',
        height:'400px',
        backgroundColor:'#fff',
        zIndex:100,
        ...styles,
    };
    return visible ? (
       <div className='modal-wrapper'>
           <div className='modal-overlay' onClick={onClose}/>
           <div className="modal-window flex-column" style={windowStyle}>
               <div className="modal-header flex-align-center">
                   <span className='pl-10'>{title}</span>
               </div>
               <div className="modal-child">
                   {children}
               </div>
           </div>
       </div>
    ) : null
};

export default ReusableModal;
