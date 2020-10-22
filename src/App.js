import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import Header from "./Components/Main/Layout/Header";
import {getStatus} from "./api/status";
import Routing from "./router";
import {useDispatch} from "react-redux";
import {getCurrentUser} from "./store/modules/user";
import './styles.scss'
import Spinner from "./Components/Reusable/Spinner";
import ResponsiveProvider from "./Context/responsiveProvider";
import ResponsiveContext from "./Context/responsiveContext";
import MobileHeader from "./Components/Main/Layout/Mobile/mobileHeader";
import history from "./services/history";
import RenderHeader from "./Components/Main/Layout/RenderHeader";


function App(props) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    async function initialize() {
        const {status} = await getStatus();
        return status === 200
    }

    useEffect(() => {
        initialize()
            .then(callback =>dispatch(getCurrentUser()))
            .finally( () => setLoading(false))
    }, [])

    return loading ? <div className='transform-center'> <Spinner/> </div> : (
                <div className="App">
                    <Routing/>
                </div>
    );
}

export default App;
