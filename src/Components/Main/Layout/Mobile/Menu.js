import React, {useEffect, useState} from 'react';
import menu from '../../../../Assets/svg/menu.svg'
import '../style.scss'
import SideDrawer from "./sideDrawer";
import {useLocation} from 'react-router-dom'
import history from "../../../../services/history";

function MobileMenu() {
    const [visible, setVisible] = useState(false);
    const RenderBackDrop = _ => visible && <div className='backdrop pointer' onClick={() => setVisible(false)}/>
    const location = useLocation()
    useEffect(() => {
        setVisible(false)
    }, [location.key])
    return (
        <div>
            <img src={menu} alt="menuIcon" onClick={() => setVisible(true)}/>
            <SideDrawer show={visible}/>
            <RenderBackDrop />
        </div>

    )
}

export default MobileMenu