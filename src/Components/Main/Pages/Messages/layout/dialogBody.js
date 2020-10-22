import React, {useContext, useEffect, useRef, useState} from 'react';
import '../style.scss'
import ReusableImage from "../../../../Reusable/Image";
import SocketContext from "../../../../../Context/socketContext";
import ResponsiveContext from "../../../../../Context/responsiveContext";
function DialogBody(props) {
    const socket = useContext(SocketContext)
    const {receiver, sender, current, members, messages} = props;
    const messagesEndRef = useRef(null)
    const mobile = useContext(ResponsiveContext)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom,[messages])

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
            <div className='flex-column mt-20' style={messageContainerStyle}>
                {!mobile &&
                    <ReusableImage
                        link={members[el.creatorId].avatar}
                        size={40}
                        rounded
                        fromServer
                    />
                }
                <div className='message-description mr-15 ml-15' style={messageBodyStyle}>
                    <span style={descriptionStyle}>{el.description}</span>
                </div>
            </div>
        )
    }) : null
    return(
        <div className='dialog-body flex-column' >
            <RenderMessagesList />
            <div ref={messagesEndRef}/>
        </div>
    )
}

export default DialogBody;
