import React from 'react';
import bg from '../../Assets/img/auth-bg.jpeg'
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
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
                <Switch>
                    <Route  path ="/auth/login"   component={Login}/>
                    <Route  path ="/auth/registration"  component={Registration}/>
                </Switch>
        </div>
    );
}

export default withRouter(Auth);
