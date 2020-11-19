import React, {useEffect, useState} from 'react'
import {Router, Route, Switch} from "react-router-dom";

import Feed from "../Components/Main/Pages/Feed";
import User from "../Components/Main/Pages/User";
import Pet from "../Components/Main/Pages/Pet";
import Post from "../Components/Main/Pages/Post";
import Chat from "../Components/Main/Pages/Chat";
import Messages from "../Components/Main/Pages/Messages";
import Search from "../Components/Main/Pages/Search";
import PetCreation from "../Components/Main/Pages/PetCreation";
import Notifications from "../Components/Main/Pages/Notifications";

import Auth from "../Components/Auth";

import Subscriptions from "../Components/Main/Pages/Subscriptions";
import {PrivateRoute} from "./privateRoute";
import MissingAds from "../Components/Main/Pages/Missings";
import { createBrowserHistory } from 'history';
import RenderHeader from "../Components/Main/Layout/RenderHeader";
import Missing from "../Components/Main/Pages/Missing";
import Test from "../Components/Test";
import {CloudinaryContext} from "cloudinary-react";

function Routing(props) {
    const history = createBrowserHistory();
    console.log(history, 'history')
    return (
                <Router history={history}>
                    <RenderHeader />
                        <Switch>
                            <Route path ="/auth"  component={Auth}/>
                                <div className="container main-wrapper">
                                    <PrivateRoute exact path='/' component={Feed} />
                                    <PrivateRoute exact path='/subscriptions' component={Subscriptions} />
                                    <PrivateRoute exact path='/chat' component={Chat} />
                                    <PrivateRoute path='/chat/room/:id' component={Messages} />
                                    <PrivateRoute path='/add-pet' component={PetCreation} />
                                    <PrivateRoute path='/notifications' component={Notifications} />
                                    <PrivateRoute path='/missings' component={MissingAds} />

                                    <Route  path='/user/:id' component={User} />
                                    <Route  path='/pet/:id' component={Pet} />
                                    <Route  path='/test' component={Test} />
                                    <Route  path='/post/:id' component={Post} />
                                    <Route  path='/missing/:id' component={Missing} />
                                    <Route  path='/search' component={Search} />
                                </div>
                        </Switch>
                </Router>
    )

}

export default Routing