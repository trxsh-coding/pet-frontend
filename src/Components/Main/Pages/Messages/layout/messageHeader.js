import React, {useEffect, useState} from 'react';
import '../style.scss'
import ReusableImage from "../../../../Reusable/Image";
function MessageHeader({user}) {
    const UserAnnotation = _ => (
        <div className='flex-align-center'>
            <ReusableImage rounded size={40} fromServer link={user.avatar}/>
            <div>
                <span className='username-span pl-15'>{user.username}</span>
            </div>
        </div>
    )
    return(
        <div className='message-header flex-align-center'>
            <UserAnnotation />
        </div>
    )
}

export default MessageHeader;
