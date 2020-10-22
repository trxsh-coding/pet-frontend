import React, {useEffect, useState} from 'react';
import '../styles.scss'
import history from "../../../../../../services/history";
import ReusableImage from "../../../../../Reusable/Image";
import {normalizeTime} from "../../../../../../Utils/timestamp";
import SubscribedItem from "./Subscribed";
import CommentedItem from "./Commented";
import LikedItem from "./Liked";
function NotificationItem({item, type, author, date, pet, comment, post}) {

    const RenderLikedItem = _ => <div>LIKED</div>

    switch (type) {
        case 'SUBSCRIBED':
            return <SubscribedItem
                    pet={pet}
                    author={author}
                    date={date}
            />
        case 'LIKED':
            return <LikedItem
                    pet={pet}
                    author={author}
                    date={date}
                    post={post}
            />
        case 'COMMENTED':
            return <CommentedItem
                    pet={pet}
                    author={author}
                    date={date}
                    comment={comment}
                    post={post}
        />
    }


}

export default NotificationItem;