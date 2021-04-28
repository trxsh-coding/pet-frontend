import React, {useEffect} from 'react';
import bg from '../../Assets/img/auth-bg.jpeg'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login'
import Registration from './Registration'
import './style.scss'
import Forgot from "./Forgot";
import Reset from "./Reset";
import useQuery from "../../CustomHooks/useQuery";
import {getCurrentUser} from "../../store/modules/user";
import {useToast} from "../../Context/toast";
const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize:'130%',
    height:'100%',
    width:'100%',
};


function Auth() {
    return (
        <div className="Auth" style={backgroundStyle}>
            <div className='overlay'/>
            <Route exact strict path ="/auth/login"   component={Login}/>
            <Route exact strict path ="/auth/registration"  component={Registration}/>
            <Route exact strict path ="/auth/forgotPassword"  component={Forgot}/>
            <Route exact strict path ="/auth/resetPassword/:token"  component={Reset}/>

        </div>
    );
}

export default Auth;
