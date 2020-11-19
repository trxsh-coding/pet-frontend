import React, {useEffect, useState} from 'react';
import ReusableImage from "../../../../Reusable/Image";
import {normalizeTime} from "../../../../../Utils/timestamp";
import {useHistory} from 'react-router-dom'

function RoomAnnotation(props) {
    const {receiver, lastMessage, id} = props;
    const user = receiver[0].user
    console.log(user)
    const history = useHistory();
    const MessageAnnotation = _ => (
        <div className='flex-column flex-between  flex-center pl-15 ' >
            <span>{user.username}</span>
            {user.online ?
                <span>В сети</span> : <span>Заходил {normalizeTime(user.lastSeen)}</span>
            }
            <span className='font-14 light-weight'>{lastMessage.description}</span>
        </div>
    )
    return (
        <div>
            <div className="RoomAnnotation flex mt-20 mb-10" onClick={() => history.push(`chat/room/${id}`)}>
                <ReusableImage width='60px' height='60px' rounded fromServer link={user.avatar}/>
                <MessageAnnotation />
            </div>
            <div className='hr'/>
        </div>
    );
}

export default RoomAnnotation;
