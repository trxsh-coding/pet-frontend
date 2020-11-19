import React, {useEffect, useState} from 'react';
import ReusableImage from "../../../../../Reusable/Image";
import {normalizeTime} from "../../../../../../Utils/timestamp";
import {useHistory} from 'react-router-dom'
function SubscribedItem({pet, author, date}) {
    const history = useHistory();
    return (
        <div className='flex-align-start'>
            <ReusableImage
                size={60}
                link={author.avatar}
                fromServer
                rounded
            />
            <div className='ml-15'>
                <div>
                    <span className='author-link-name pointer' onClick={() => history.push(`/user/${author.id}`)}>{author.username}</span>
                    <span className='font-14 light-weight'> подписался(-ась) на </span>
                    <span className='author-link-name pointer' onClick={() => history.push(`/pet/${pet.id}`)}>{pet.name}</span>
                </div>
                <div className='mt-5'>
                    <span className='timestamp'>{normalizeTime(date)}</span>
                </div>
            </div>
        </div>
    )
}

export default SubscribedItem