import React, {useEffect, useState} from 'react';
import ReusableImage from "../../../../Reusable/Image";
import {normalizeTime} from "../../../../../Utils/timestamp";
import '../styles.scss'
import {useHistory} from 'react-router-dom'
function PostHeader(props) {
    const {link, date, id, username} = props;
    const history = useHistory()
    function onRouterPush() {
        history.push(`/pet/${id}`)
    }
    return (
        <div className='flex'>
            <div onClick={onRouterPush}><ReusableImage styles={{cursor:'pointer'}} size={40} link={link} rounded fromServer/></div>
            <div className="author-info ml-10 flex-column">
                <span  className='pointer' onClick={onRouterPush}>{username}</span>
                <span className='timestamp'>{normalizeTime(date)}</span>
            </div>
        </div>
    );
}

export default PostHeader;
