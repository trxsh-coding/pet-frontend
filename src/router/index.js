import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Feed from "../Components/Main/Pages/Feed";
import User from "../Components/Main/Pages/User";
import Pet from "../Components/Main/Pages/Pet";
import Auth from "../Components/Auth";

export default function Routing() {

    return (
        <Router>
            <Route path ="/auth"  component={Auth}/>
            <div className="container">
                <Route exact path='/' component={Feed} />
                <Route  path='/user/:id' component={User} />
                <Route  path='/pet/:id' component={Pet} />

            </div>

        </Router>
    )

}
