import React, {useEffect, useState} from 'react';
import '../style.scss'
import ReusableImage from "../../../../Reusable/Image";
import {useHistory} from 'react-router-dom'
function MessageHeader({user}) {
    const history = useHistory()
    const UserAnnotation = _ => (
        <div className='flex-align-center'>
            <div onClick={() => history.push(`/user/${user.id}`)}>
                <ReusableImage rounded size={40} fromServer link={user.avatar}/>
            </div>
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
