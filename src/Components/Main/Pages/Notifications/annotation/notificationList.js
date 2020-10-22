import React, {useEffect, useState} from 'react';
import './styles.scss'
import NotificationItem from "./notificationItem";
function NotificationsList({list}) {
    const backgroundStyle = e => {
        return {
            backgroundColor: e ? '#FFFFFF': '#e8f2f987'
        }
    }
    const RenderList = _ => {
        return Object.values(list).map( e => {
            return (
                <div className='item-wrapper' style={backgroundStyle(e.isRead)} key={e._id}>
                    <NotificationItem
                        type={e.notificationType.typeName}
                        item={e}
                        author={e.creatorId}
                        pet={e.petId}
                        comment={e.commentId}
                        post={e.postId}
                    />
                </div>
            )

        })

    }


    return (
        <div>
            <RenderList />
        </div>
    )
}

export default NotificationsList;