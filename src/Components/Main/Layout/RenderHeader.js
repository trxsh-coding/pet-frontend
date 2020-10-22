import history from "../../../services/history";
import React, {useContext, useEffect, useState} from "react";
import Header from "./Header";
import MobileHeader from "./Mobile/mobileHeader";
import ResponsiveContext from "../../../Context/responsiveContext";
import {useSelector} from "react-redux";

function RenderHeader({action}) {
    const user = useSelector( s => s.user.current);
    const [visible, setVisible] = useState(false)
    function setActiveHeader() {
        !history.location.pathname.includes('auth') ? setVisible(true) : setVisible(false)
    }
    useEffect(() => {
        setActiveHeader()
    }, [user])
    const mobile = useContext(ResponsiveContext)
    const RenderHeader = _ => !mobile ? <Header/> : <MobileHeader  />
    return visible ? <RenderHeader /> : null
}

export default RenderHeader