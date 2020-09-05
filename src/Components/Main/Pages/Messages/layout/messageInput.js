import React, {useContext, useEffect, useState} from 'react';
import ReusableInput from "../../../../Reusable/Input";
import { EmojiPicker } from 'react-twemoji-picker';
import EmojiData from "react-twemoji-picker/data/twemoji.json";
import emoji from '../../../../../Assets/svg/smile.svg'
import '../style.scss'
import SocketContext from "../../../../../Context/socketContext";
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../../../store/modules/chat";


function MessageInput(props) {
    const {receiverId, senderId, chatId} = props;
    const [description, setDescription] = useState('');
    const [visible, setVisible] = useState(false)
    const socket = useContext(SocketContext)
    const emojiData = Object.freeze(EmojiData)
    const handleEmojiSelect = (emoji) => console.log(emoji)
    const dispatch = useDispatch();
    const onMessageSend = _ => {
        dispatch(sendMessage({
                description,
                receiverId,
                chatId
        }, socket))

    }
    function onEmojiEnter() {
    }

    function onEmojiLeave() {
        setTimeout(() => setVisible(false), 2000)

    }
    return(
        <div className='messageInput flex-align-center relative'>
            <div className='emoji-container' onMouseOver={() => setVisible(true)}>
                { visible &&
                    <EmojiPicker emojiData={emojiData} handleEmojiSelect={handleEmojiSelect}/>
                }
            </div>

            <ReusableInput
                value={description}
                background={'#ffffff'}
                onChange={(e) => setDescription(e)}
                action={() => onMessageSend()}
            />
            <img
                src={emoji}
                width={20}
                height={20}
                onMouseOver={() => setVisible(true)}
                onMouseLeave={() => onEmojiLeave()}
            />
        </div>
    )
}

export default MessageInput;
