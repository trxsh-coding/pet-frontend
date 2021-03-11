import React, {useContext, useEffect, useState} from 'react';
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import {GET_LIST} from "../../../../store/types";
import {notificationsActions, readNotifications} from "../../../../store/modules/notifications";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import NotificationsList from "./annotation/notificationList";
import Aside from "../../Layout/Aside";
import ResponsiveContext from "../../../../Context/responsiveContext";
import ShortAnnotation from "../../Layout/Annotatiton/ShortAnnotation";

function Notifications() {
    const dispatch = useDispatch();
    const unreadCount = useSelector(s => s.notification.unreadCount, shallowEqual)

    useEffect(() => {
        dispatch(notificationsActions[GET_LIST]())
        if (unreadCount > 0) setTimeout(dispatch(readNotifications()), 3000)
    }, []);

    const [filter, setFilter] = useState('ALL')
    const mobile = useContext(ResponsiveContext)

    const current = useSelector(s => s.user.current || {});
    const user = useSelector(s => s.user.data[current] || {});
    const {background, username, id} = user;
    const map = {
        ALL: 'Все уведомления',
        COMMENTED: 'Комментарии',
        SUBSCRIBED: 'Подписки',
        LIKED: 'Лайки'
    }
    const list = useSelector(s =>
        filter === 'ALL' ? Object.values(s.notification.data) :
            Object.values(s.notification.data).filter(el => el.notificationType.typeName === filter)
            || [], shallowEqual
    )
    return (
        <>
            {!mobile &&
            <ShortAnnotation
                username={username}
                background={background}
                id={id}
            />}
            <div className={mobile ? 'flex-column-reverse' : 'flex'}>
                <ComponentWrapper title='Уведомления'>
                    {list.length ?
                        <NotificationsList list={list}/> : <span>Уведомлений нет</span>
                    }
                </ComponentWrapper>
                <Aside
                    action={(e) => setFilter(e)}
                    map={map}
                />
            </div>
        </>
    )
}

export default Notifications;