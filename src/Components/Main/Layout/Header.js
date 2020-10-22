import React, {useEffect, useState} from 'react';
import './style.scss'
import logo from '../../../Assets/img/logo.svg'
import ReusableImage from "../../Reusable/Image";
import {useDispatch, useSelector} from "react-redux";
import chatIcon from "../../../Assets/svg/chat.svg"
import searchIcon from "../../../Assets/svg/search.svg"
import notificationIcon from "../../../Assets/svg/notification.svg"
import {useHistory} from 'react-router-dom'
import dropdownIcon from "../../../Assets/svg/dropdown.svg"
import ReusableDropdown from "../../Reusable/Dropdown";
import {useCookies} from "react-cookie";
import {api} from "../../../Utils/fetch";
import {API_ROUTES} from "../../../Constants";
import ReusableBadge from "../../Reusable/Badge";
import {getNotificationsCount} from "../../../store/modules/notifications";

function Header() {
    const current = useSelector( s => s.user.current || {}) ;
    const user = useSelector( s => s.user.data[current] || {}) ;
    const notificationCount = useSelector( s => s.notification.unreadCount) ;
    const [dropdown, setDropdown] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch()
    const renderHeader = !history.location.pathname.includes('auth');

    useEffect(() => {
        dispatch(getNotificationsCount())
    }, [user])
    function onKeyPressAction(e) {
        if(e.key === 'Enter') history.push({
            pathname: '/search',
            state: e.target.value
        })
    }
    async function onCookieDelete() {
        const {data} = await api({URL:API_ROUTES.LOGOUT, METHOD:'get'})
        if(data) history.push('/auth/login')
    }
    return renderHeader && (
        <div className="header flex-align-center">
            <div className="container flex-between flex" >
                <div className="logo-navbar flex-align-center">
                    <img src={logo} alt="Logo" onClick={() => history.push('/')} />
                    <div className='search-input ml-50 flex-between flex'>
                        <input type="text"
                               className='  '
                               placeholder={'Введите имя или породу...'}
                               onKeyPress={onKeyPressAction}
                        />
                        <img src={searchIcon} alt="search-icon"/>
                    </div>
                    <div className='ml-30 relative pointer' onClick={() => history.push('/notifications')}>
                        <img src={notificationIcon} alt="notification-icon"/>
                        {notificationCount > 0 && <ReusableBadge amount={notificationCount}/>}
                    </div>
                </div>
                <div   className='flex-align-center '>
                    <div className='flex-align-center relative'
                        onMouseEnter={() => setDropdown(true)}
                         onMouseLeave={() => setTimeout(() => setDropdown(false), 2000)}
                    >
                        <ReusableImage
                            size='40px'
                            rounded
                            fromServer
                            link={user.avatar}

                        />
                        <span className='pl-15 font-16 light-weight pr-10'>{user.username}</span>
                        <img src={dropdownIcon} alt="dropdownIcon"/>
                        <ReusableDropdown visible={dropdown} action={(payload) => setDropdown(payload)}>
                            <div>
                                <span className='light-weight pointer' onClick={() => history.push(`/user/${user.id}`)}>Моя страница</span>
                            </div>
                            <div className='mt-10'>
                                <span className='light-weight pointer' onClick={() => onCookieDelete()} >Выйти</span>
                            </div>
                        </ReusableDropdown>
                    </div>
                    <div className='  pointer ml-80' onClick={() => history.push('/chat')}>
                        <img src={chatIcon} width={25} height={22} alt="chat-icon"/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
