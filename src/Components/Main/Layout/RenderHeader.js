import React, {useContext, useEffect, useState} from "react";
import Header from "./Header";
import MobileHeader from "./Mobile/mobileHeader";
import ResponsiveContext from "../../../Context/responsiveContext";
import {useSelector} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';
function RenderHeader({action}) {
    const user = useSelector( s => s.user.current);
    const [visible, setVisible] = useState(true)
    const history = useHistory();
    function setActiveHeader() {
        !history.location.pathname.includes('auth') ? setVisible(true) : setVisible(false)
    }
    const location = useLocation()
    useEffect(() => {
        setActiveHeader()
    }, [location])
    const mobile = useContext(ResponsiveContext)
    const RenderHeader = _ => !mobile ? <Header/> : <MobileHeader  />
    return visible ? <RenderHeader /> : null
}

export default RenderHeader