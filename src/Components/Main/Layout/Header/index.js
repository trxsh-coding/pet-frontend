import React, {useEffect, useState} from 'react';
import '../style.scss'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {getNotificationsCount} from "../../../../store/modules/notifications";
import {logout} from "../../../../store/modules/auth";
import logo from '../../../../Assets/img/logo.svg'
import bookmarkIcon from '../../../../Assets/svg/bookmark.svg'
import chatIcon from '../../../../Assets/svg/chat.svg'
import dropdownIcon from '../../../../Assets/svg/dropdown.svg'
import notificationIcon from '../../../../Assets/svg/notification.svg'
import ReusableDropdown from "../../../Reusable/Dropdown";
import ReusableBadge from "../../../Reusable/Badge";
import ReusableImage from "../../../Reusable/Image";
import Search from "./components/search";

function Header() {
		const current = useSelector(s => s.user.current || {});
		const user = useSelector(s => s.user.data[current] || {});
		const notificationCount = useSelector(s => s.notification.unreadCount);
		const value = useSelector(s => s.search.searchValue);
		
		const [dropdown, setDropdown] = useState(false)
		const history = useHistory();
		const dispatch = useDispatch()
		const renderHeader = !history.location.pathname.includes('auth');
		
		useEffect(() => {
				dispatch(getNotificationsCount())
		}, [user])
		
		
		async function onCookieDelete() {
				document.cookie = "jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
				history.push('/auth/login')
				await dispatch(logout())
		}
		
		return renderHeader && (
				<div className="header flex-align-center">
						<div className="container flex-between flex">
								<div className="logo-navbar flex-align-center">
										<img src={logo} alt="Logo" className='pointer' onClick={() => history.push('/')}/>
										<Search value={value}/>
										<div className='ml-30 relative pointer' onClick={() => history.push('/bookmarks')}>
												<img src={bookmarkIcon}/>
										</div>
										<div className='ml-30 relative pointer' onClick={() => history.push('/notifications')}>
												<img src={notificationIcon} alt="notification-icon"/>
												{notificationCount > 0 && <ReusableBadge amount={notificationCount}/>}
										</div>
										<div className='  pointer ml-30' onClick={() => history.push('/chat')}>
												<img src={chatIcon} width={25} height={22} alt="chat-icon"/>
										</div>
								</div>
								<div className='flex-align-center '>
										<div className='flex-align-center relative'>
												<div onClick={() => history.push(`/user/${user.id}`)} className='pointer'>
														<ReusableImage
																size='40px'
																rounded
																fromServer
																link={user.avatar}
														/>
												</div>
												<span className='pl-15 font-16 light-weight pr-10 pointer'
												      onClick={() => setDropdown(!dropdown)}>{user.username}</span>
												<div className='pointer' onClick={() => setDropdown(!dropdown)}
												     style={{height: '100%', width: '20px'}}>
														<img src={dropdownIcon} alt="dropdownIcon"/>
												</div>
												<ReusableDropdown visible={dropdown} action={(payload) => setDropdown(payload)}>
														<div>
																<span className='light-weight pointer'
																      onClick={() => history.push(`/user/${user.id}`)}>Моя страница</span>
														</div>
														<div className='mt-10'>
																<span className='light-weight pointer' onClick={() => onCookieDelete()}>Выйти</span>
														</div>
												</ReusableDropdown>
										</div>
								
								</div>
						
						</div>
				</div>
		);
}

export default Header;
