import React, {useEffect, useState} from 'react';
import ReusableInput from "../../../../Reusable/Input";
import { EmojiPicker } from 'react-twemoji-picker';
import EmojiData from "react-twemoji-picker/data/twemoji.json";
import emoji from '../../../../../Assets/svg/smile.svg'
import '../style.scss'
import {socket} from "../../../../../Utils/socket";


function MessageInput(props) {
    const {receiverId, senderId} = props;
    const [description, setDescription] = useState('');
    const emojiData = Object.freeze(EmojiData)
    const handleEmojiSelect = (emoji) => console.log(emoji)
    const onMessageSend = _ => {
        socket.emit('private-message', {
            description,
            senderId,
            receiverId
        })
    }

    return(
        <div className='messageInput flex-align-center relative'>
            <div className='emoji-container'>
                {/*<EmojiPicker emojiData={emojiData} handleEmojiSelect={handleEmojiSelect}/>*/}
            </div>

            <ReusableInput
                value={description}
                onChange={(e) => setDescription(e)}
                action={() => onMessageSend()}
            />
            <img src={emoji} width={20} height={20}/>
        </div>
    )
}

export default MessageInput;
