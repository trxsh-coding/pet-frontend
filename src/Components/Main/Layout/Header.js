import React, {useEffect, useState} from 'react';
import './style.scss'
import logo from '../../../Assets/img/logo.svg'
import ReusableImage from "../../Reusable/Image";
import {useDispatch, useSelector} from "react-redux";
import chatIcon from "../../../Assets/svg/chat.svg"
import bookmarkIcon from "../../../Assets/svg/bookmark.svg"
import searchIcon from "../../../Assets/svg/search.svg"
import notificationIcon from "../../../Assets/svg/notification.svg"
import missingsIcon from "../../../Assets/svg/megaphone.svg"

import {useHistory} from 'react-router-dom'
import dropdownIcon from "../../../Assets/svg/dropdown.svg"
import ReusableDropdown from "../../Reusable/Dropdown";
import {useCookies} from "react-cookie";
import {api} from "../../../Utils/fetch";
import {API_ROUTES} from "../../../Constants";
import ReusableBadge from "../../Reusable/Badge";
import {getNotificationsCount} from "../../../store/modules/notifications";
import {logout} from "../../../store/modules/auth";
function Header() {
    const current = useSelector( s => s.user.current || {}) ;
    const user = useSelector( s => s.user.data[current] || {}) ;
    const notificationCount = useSelector( s => s.notification.unreadCount) ;
    const [dropdown, setDropdown] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch()
    const renderHeader = !history.location.pathname.includes('auth');
    const [value, setValue] = useState('')
    useEffect(() => {
        dispatch(getNotificationsCount())
    }, [user])
    function onKeyPressAction(e) {
        if(e.key === 'Enter') history.push({
            pathname: '/search',
            state: value
        })
    }

    function onPressIconAction() {
        history.push({
            pathname: '/search',
            state: value
        })
    }

    async function onCookieDelete() {
        history.push('/auth/login')
        await dispatch(logout())
    }
    return renderHeader && (
        <div className="header flex-align-center">
            <div className="container flex-between flex" >
                <div className="logo-navbar flex-align-center">
                    <img src={logo} alt="Logo"  className='pointer' onClick={() => history.push('/')} />
                    <div className='search-input ml-50 flex-between flex'>
                        <input type="text"
                               className='  '
                               placeholder={'Введите имя или породу...'}
                               onKeyPress={onKeyPressAction}
                               onChange={(e) => setValue(e.target.value)}
                        />
                        <img src={searchIcon} alt="search-icon" className='pointer' onClick={onPressIconAction}/>
                    </div>
                    <div className='ml-30 relative pointer' onClick={() => history.push('/bookmarks')}>
                        <img src={bookmarkIcon} />
                    </div>
                    <div className='ml-30 relative pointer' onClick={() => history.push('/notifications')}>
                        <img src={notificationIcon} alt="notification-icon"/>
                        {notificationCount > 0 && <ReusableBadge amount={notificationCount}/>}
                    </div>
                    <div className='  pointer ml-30' onClick={() => history.push('/chat')}>
                        <img src={chatIcon} width={25} height={22} alt="chat-icon"/>
                    </div>
                </div>
                <div   className='flex-align-center '>
                    <div className='flex-align-center relative'

                    >
                        <ReusableImage
                            size='40px'
                            rounded
                            fromServer
                            link={user.avatar}

                        />
                        <span className='pl-15 font-16 light-weight pr-10 pointer' onClick={() => history.push(`/user/${user.id}`)}>{user.username}</span>
                        <div className='pointer' onClick={() => setDropdown(!dropdown)} style={{height:'100%', width:'20px'}}>
                            <img src={dropdownIcon} alt="dropdownIcon"  />
                        </div>
                        <ReusableDropdown visible={dropdown}   action={(payload) => setDropdown(payload)}>
                            <div>
                                <span className='light-weight pointer' onClick={() => history.push(`/user/${user.id}`)}>Моя страница</span>
                            </div>
                            <div className='mt-10'>
                                <span className='light-weight pointer' onClick={() => onCookieDelete()} >Выйти</span>
                            </div>
                        </ReusableDropdown>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;
