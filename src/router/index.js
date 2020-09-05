import React, {useEffect, useState} from 'react'
import {Router, Route, withRouter, Switch} from "react-router-dom";

import Feed from "../Components/Main/Pages/Feed";
import User from "../Components/Main/Pages/User";
import Pet from "../Components/Main/Pages/Pet";
import Post from "../Components/Main/Pages/Post";
import Chat from "../Components/Main/Pages/Chat";
import Messages from "../Components/Main/Pages/Messages";
import Search from "../Components/Main/Pages/Search";
import PetCreation from "../Components/Main/Pages/PetCreation";

import Auth from "../Components/Auth";

import Subscriptions from "../Components/Main/Pages/Subscriptions";
import {PrivateRoute} from "./privateRoute";
import history from "../services/history";
import {Provider} from "react-redux";
import {store} from "../store";

function Routing(props) {
    console.log(props)
    return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path ="/auth"  component={Auth}/>
                        <div className="container main-wrapper">
                            <PrivateRoute exact path='/' component={Feed} />
                            <PrivateRoute exact path='/subscriptions' component={Subscriptions} />
                            <PrivateRoute exact path='/chat' component={Chat} />
                            <PrivateRoute path='/chat/room/:id' component={Messages} />
                            <PrivateRoute path='/add-pet' component={PetCreation} />

                            <Route  path='/user/:id' component={User} />
                            <Route  path='/pet/:id' component={Pet} />
                            <Route  path='/post/:id' component={Post} />
                            <Route  path='/search' component={Search} />

                        </div>
                    </Switch>
                </Router>
            </Provider>
    )

}

export default withRouter(Routing)