import React, {useLayoutEffect} from 'react';
import {withRouter} from "react-router-dom";
import './styles.scss'
import Header from "./Components/Main/Layout/Header";
import {getStatus} from "./api/status";
import Routing from "./router";
import {useDispatch} from "react-redux";
import {getCurrentUser} from "./store/modules/user";

async function initialize() {
    const {status} = await getStatus();
    return status === 200
}

function App(props) {
    const {history} = props;
    const dispatch = useDispatch();
    useLayoutEffect(() => {
         initialize().then(callback => {
             if(!callback) history.push('/auth/login');
             else dispatch(getCurrentUser())
         })

    }, []);
    return (
        <div className="App">
            <Header/>
            <Routing/>
        </div>
    );
}

export default withRouter(App);
