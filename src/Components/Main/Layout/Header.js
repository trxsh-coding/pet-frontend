import React, {useState} from 'react';
import './style.scss'
import logo from '../../../Assets/img/logo.svg'
import ReusableImage from "../../Reusable/Image";
import history from "../../../services/history";
import {useSelector} from "react-redux";
import chatIcon from "../../../Assets/svg/chat.svg"
import searchIcon from "../../../Assets/svg/search.svg"

function Header() {
    const renderHeader = !history.location.pathname.includes('auth');
    const current = useSelector( s => s.user.current || {}) ;
    const user = useSelector( s => s.user.data[current] || {}) ;
    function onKeyPressAction(e) {
        if(e.key === 'Enter') history.push({
            pathname: '/search',
            state: {
                name:e.target.value
            }
        })
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
                </div>
                <div   className='flex-align-center '>
                    <div className='flex-align-center' onClick={() => history.push(`/user/${current}`)}>
                        <ReusableImage
                            size='40px'
                            rounded
                            fromServer
                            link={user.avatar}

                        />
                        <span className='pl-15 font-16 light-weight'>{user.username}</span>
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
