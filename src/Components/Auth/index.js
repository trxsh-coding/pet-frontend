import React from 'react';
import bg from '../../Assets/img/auth-bg.jpeg'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login'
import Registration from './Registration'
import './style.scss'
const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize:'cover',
    height:'100%',
    width:'100%'
};

function Auth() {
    return (
        <div className="Auth" style={backgroundStyle}>
            <div className='overlay'/>
            <Route exact strict path ="/auth/login"   component={Login}/>
            <Route exact strict path ="/auth/registration"  component={Registration}/>
        </div>
    );
}

export default Auth;
