import React, {useEffect, useState} from 'react'
import {Router, Route, withRouter, Switch} from "react-router-dom";

import Feed from "../Components/Main/Pages/Feed";
import User from "../Components/Main/Pages/User";
import Pet from "../Components/Main/Pages/Pet";
import Post from "../Components/Main/Pages/Post";
import Auth from "../Components/Auth";
import Subscriptions from "../Components/Main/Pages/Subscriptions";
import {PrivateRoute} from "./privateRoute";
import history from "../services/history";

function Routing(props) {
    return (
        <Router history={history}>
            <Switch>
                <Route path ="/auth"  component={Auth}/>
                <div className="container">
                    <PrivateRoute exact path='/' component={Feed} />
                    <PrivateRoute exact path='/subscriptions' component={Subscriptions} />
                    <Route  path='/user/:id' component={User} />
                    <Route  path='/pet/:id' component={Pet} />
                    <Route  path='/post/:id' component={Post} />

                </div>
            </Switch>
        </Router>
    )

}

export default withRouter(Routing)