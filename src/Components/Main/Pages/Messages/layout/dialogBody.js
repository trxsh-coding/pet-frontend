import React, {useEffect, useState} from 'react';
import '../style.scss'
import ReusableImage from "../../../../Reusable/Image";
import {socket} from "../../../../../Utils/socket";
function DialogBody(props) {
    const {receiver, sender, current, members, messages} = props;
    useEffect(() => {
        handleGettingMessage()
    },[])
    function handleGettingMessage() {
        socket.on('get-message', function(data){
            console.log(data)
            console.log('data')
        });

    }
    const RenderMessagesList = _ => messages ? messages.map( el => {
        const isReceiver = receiver.id === el.receiverId
        const messageBodyStyle = {
            backgroundColor: isReceiver ?
                '#4A76A8' : '#ffffff',
        }
        const messageContainerStyle = {
            flexFlow: isReceiver ?
                'row-reverse' : 'row',
                width:'100%'
        }
        const descriptionStyle = {
            color: isReceiver ?
                '#ffffff' : '#000000'
        }
        return (
            <div className='flex-column ' style={messageContainerStyle}>
                <ReusableImage
                    link={members[el.creatorId].avatar}
                    size={40}
                    rounded
                    fromServer
                />
                <div className='message-description mr-15' style={messageBodyStyle}>
                    <span style={descriptionStyle}>{el.description}</span>
                </div>
            </div>
        )
    }) : null
    return(
        <div className='dialog-body'>
            <RenderMessagesList />
        </div>
    )
}

export default DialogBody;
