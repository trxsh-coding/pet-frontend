import React, {useEffect, useState} from 'react';
import ReusableImage from "../../../../Reusable/Image";
import history from "../../../../../services/history";

function RoomAnnotation(props) {
    const {receiver, lastMessage, id} = props;
    console.log(receiver)
    const user = receiver[0].user
    console.log(user)
    const MessageAnnotation = _ => (
        <div className='flex-column flex-between pl-15' >
            <span>{user.username}</span>
            <span>Заходил в 12:48</span>
            <span className='font-14 light-weight'>{lastMessage.description}</span>
        </div>
    )
    return (
        <div className="RoomAnnotation flex" onClick={() => history.push(`chat/${id}`)}>
            <ReusableImage width='60px' height='60px' rounded fromServer link={user.avatar}/>
            <MessageAnnotation />
        </div>
    );
}

export default RoomAnnotation;
