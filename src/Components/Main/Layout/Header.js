import React from 'react';
import './style.scss'
import logo from '../../../Assets/img/logo.svg'
import ReusableImage from "../../Reusable/Image";
import history from "../../../services/history";
import {useSelector} from "react-redux";
function Header() {
    const renderHeader = !history.location.pathname.includes('auth');
    const current = useSelector( s => s.user.current || {}) ;
    const user = useSelector( s => s.user.data[current] || {}) ;
    return renderHeader && (
        <div className="header flex-align-center">
            <div className="container flex-between flex" >
                <img src={logo} alt="Logo" onClick={() => history.push('/')} />
                <div  onClick={() => history.push(`/user/${current}`)}>
                    <ReusableImage size='40px' rounded fromServer link={user.avatar}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
