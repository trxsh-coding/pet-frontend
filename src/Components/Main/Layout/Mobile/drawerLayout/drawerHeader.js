import ReusableImage from "../../../../Reusable/Image";
import React from 'react'
import chatIcon from "../../../../../Assets/svg/chat.svg";
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
function DrawerHeader({avatar, name, id}) {
    const notificationCount = useSelector( s => s.notification.unreadCount) ;
    const history = useHistory();
    return (
        <>
            <div className='drawer-header-wrapper flex-align-center flex-between'>
                <div className=' flex-align-center'>
                    <ReusableImage size={40} fromServer link={avatar} rounded/>
                    <div className='ml-10  flex-evenly self-stretch flex-column'>
                        <span className='font-16'>{name}</span>
                        <span className='open__item pointer' onClick={() => history.push(`/user/${id}`)}>Открыть профиль</span>
                    </div>
                </div>
                <div className='ml-30 relative pointer' onClick={() => history.push('/chat')}>
                    <img src={chatIcon} alt="chat-icon" />
                </div>
            </div>
            <div className='hr'/>
        </>

    )
}

export default DrawerHeader;