import React, {useEffect, useState} from 'react';
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import {GET_LIST} from "../../../../store/types";
import {useDispatch, useSelector} from "react-redux";
import {chatActions} from "../../../../store/modules/chat";
import RoomAnnotation from "./layout/roomAnnotation";
import Spinner from "../../../Reusable/Spinner";
function Chat() {
    const dispatch = useDispatch();
    const current = useSelector( (s) => s.user.current);
    const list = useSelector( (s) => Object.values(s.chat.data));
    const loading = useSelector( (s) => s.chat.loading);
    function initialize() {
        dispatch(chatActions[GET_LIST](current))
    }
    useEffect(() => {
        initialize()
    }, [])
    if(loading) return <div className='transform-center'> <Spinner/> </div>
    const receiver = payload => payload.filter( e => e.user.id !== current);
    const ChatList = _ => list && list.length ?
        list.map( (e, index) =>
            <RoomAnnotation
                key={index}
                receiver={receiver(e.members)}
                id={e._id}
                lastMessage={e.messages[e.messages.length - 1]}
            />) :
        null
    return (
        <div className="Chat">
            <ComponentWrapper title='Сообщения'>
                <ChatList />
            </ComponentWrapper>
        </div>
    );
}

export default Chat;
