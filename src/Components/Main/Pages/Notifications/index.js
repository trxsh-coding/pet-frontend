import React, {useContext, useEffect, useState} from 'react';
import ComponentWrapper from "../../../Reusable/ComponentWrapper";
import {GET_LIST} from "../../../../store/types";
import {notificationsActions, readNotifications} from "../../../../store/modules/notifications";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import NotificationsList from "./annotation/notificationList";
import Aside from "../../Layout/Aside";
import ResponsiveContext from "../../../../Context/responsiveContext";
import ShortAnnotation from "../../Layout/Annotatiton/ShortAnnotation";
import {ENotificationsFilters, ENotificationsTypes} from "./types";
import {ESettingsTypes} from "../User/settings/types";
import useCurrentUser from "../../../../CustomHooks/useCurrentUser";
import {getUnreadCount} from "./selectors";

function Notifications() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState(ENotificationsTypes.all)
    const unreadCount = useSelector(getUnreadCount);
    const mobile = useContext(ResponsiveContext)
    const {user} = useCurrentUser();
    const {background, username, id} = user;
    const list = useSelector(s =>
        filter === ENotificationsTypes.all ? Object.values(s.notification.data) :
            Object.values(s.notification.data).filter(el => el.notificationType.typeName === filter)
            || [], shallowEqual
    )

    useEffect(() => {
        dispatch(notificationsActions[GET_LIST]())
        if (unreadCount > 0) setTimeout(dispatch(readNotifications()), 3000)
    }, []);

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
                    {list.length
                        ? <NotificationsList list={list}/>
                        : <span>Уведомлений нет</span>
                    }
                </ComponentWrapper>
                <Aside
                    filters={ENotificationsFilters}
                    value={filter}
                    action={setFilter}
                    map={ENotificationsTypes}
                />
            </div>
        </>
    )
}

export default Notifications;