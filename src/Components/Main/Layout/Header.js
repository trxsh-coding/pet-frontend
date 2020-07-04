import React from 'react';
import {withRouter} from 'react-router-dom'
import './style.scss'
import logo from '../../../Assets/img/logo.svg'
import ReusableImage from "../../Reusable/Image";
function Header({location}) {

    const renderHeader = !location.pathname.includes('auth');

    return renderHeader && (
        <div className="header flex-align-center">
            <div className="container flex-between flex">
                <img src={logo} alt="Logo" />
                <ReusableImage size='40px' rounded/>
            </div>
        </div>
    );
}

export default withRouter(Header);
