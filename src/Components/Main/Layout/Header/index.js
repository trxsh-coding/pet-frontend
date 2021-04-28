import React, {useEffect, useState} from 'react';
import '../style.scss'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {getNotificationsCount} from "../../../../store/modules/notifications";
import {logout} from "../../../../store/modules/auth";
import logo from '../../../../Assets/svg/logo.png'
import Search from "./components/search";
import useCurrentUser from "../../../../CustomHooks/useCurrentUser";
import UserHeaderInfo from "./components/userInfo";
import HeaderIcons from "./components/headerIcons";

function Header() {

    const notificationCount = useSelector(s => s.notification.unreadCount);
    const value = useSelector(s => s.search.searchValue);
    const current = useSelector(s => s.user.current);

    const history = useHistory();
    const dispatch = useDispatch()

    const {user} = useCurrentUser();

    const {avatar, id, username} = user;

    const renderHeader = !history.location.pathname.includes('auth');

    useEffect(() => {
        dispatch(getNotificationsCount())
    }, [user])


    async function onCookieDelete() {
        document.cookie = "jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        history.push('/auth/login')
        await dispatch(logout())
    }

    const onAvatarClick = () => history.push(`/user/${id}`);
    return renderHeader && (
        <div className="header flex-align-center">
            <div className="container flex-between flex">
                <div className='flex-align-center'>
                    <img src={logo} alt="Logo" width={47} className='pointer' onClick={() => history.push('/')}/>
                    <Search value={value}/>
                    {current && <HeaderIcons count={notificationCount}/>}
                </div>

                {current &&
                <>
                    <UserHeaderInfo username={username} id={id} avatar={avatar}/>
                </>
                }
            </div>
        </div>
    );
}

export default Header;
