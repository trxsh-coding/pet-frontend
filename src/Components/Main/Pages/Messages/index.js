import React, {useEffect, useState} from 'react';
import MessageHeader from "./layout/messageHeader";
import {useDispatch, useSelector} from "react-redux";
import {chatActions} from "../../../../store/modules/chat";
import {GET_BY_ID, GET_LIST} from "../../../../store/types";
import Spinner from "../../../Reusable/Spinner";
import DialogBody from "./layout/dialogBody";
import MessageInput from "./layout/messageInput";
import './style.scss'
function Messages(props) {

    const id = props.match.params.id;
    const dispatch = useDispatch();

    const chat = useSelector( s => s.chat.data[id] || {});
    const loading = useSelector( s => s.chat.loading);
    const current = useSelector( s => s.user.current);
    const currentUser = useSelector( s => s.user.data[current]);

    useEffect( () => {
        if(!Object.keys(chat).length)  dispatch(chatActions[GET_BY_ID](id))
    }, [])

    const receiver = Object.keys(chat).length ? chat.members.filter( el => el.id !== current )[0].user : {}
    console.log(receiver)
    const membersById = _ => {
        if(Object.keys(chat).length){
            let map = {}
            for (let {user} of chat.members){
                map = {...map, ...{[user._id]:user}}
            }
            return map;
        }
    }
    console.log(membersById())
    return !loading || Object.keys(chat).length?(
        <div className='message-container'>
            <MessageHeader user={receiver}/>
            <DialogBody
                current={current}
                members={membersById()}
                messages={chat.messages}
                receiver={receiver}
                sender={currentUser}
            />
            <MessageInput receiverId={receiver.id} senderId={current}/>
        </div>
    ) : <div className='transform-center'> <Spinner/> </div>
}

export default Messages;
