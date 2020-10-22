import React, {useContext} from 'react'
import './reusable.scss'
import close from '../../Assets/svg/Close.svg'
import ResponsiveContext from "../../Context/responsiveContext";
const ReusableModal = (props) => {
    const mobile = useContext(ResponsiveContext)
    const {
        children,
        styles,
        onClose,
        title,
        visible,
        height ='661px',
        width = mobile? '100%' : '945px'
    } = props;
    const windowStyle = {
        width:width,
        height:height,
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
                   <img src={close} width='25px' height='25px' alt='close' className='header-close-icon pointer' onClick={onClose}/>
                   {!mobile &&
                        <span className='pl-10 flex-center'>{title}</span>
                   }
               </div>
               <div className="modal-child">
                   {children}
               </div>
           </div>
       </div>
    ) : null
};

export default ReusableModal;
