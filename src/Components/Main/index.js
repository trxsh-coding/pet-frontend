import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import User from "./Pages/User";
import Pet from "./Pages/Pet";
import Header from "./Layout/Header";
import Feed from "./Pages/Feed";
import Post from "./Pages/Post";

function Main(props) {
    const isLoggedIn = useSelector(state => Object.keys(state.user.data).length);
    const id = useSelector(state => state.user.data._id);

    return (
        <div className="Main">
            <Header/>
            <Router>
                <Switch>
                    <Route  path="/user:id" component={User}/>
                    <Route  path="/pet:id" component={Pet}/>
                    <Route  path="/post" component={Feed}/>
                    <Route  path="/post:id" component={Post}/>
                </Switch>
            </Router>
        </div>
    );
}

export default Main;
