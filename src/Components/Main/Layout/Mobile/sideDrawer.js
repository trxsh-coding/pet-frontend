import React, {useState} from 'react';
import DrawerHeader from "./drawerLayout/drawerHeader";
import {useSelector} from "react-redux";
import DrawerLinks from "./drawerLayout/drawerLinksList";
import '../style.scss'

function SideDrawer({show}) {
    const user = useSelector( s => s.user.data[s.user.current] || {})
    const {avatar, username, id} = user;
    return user && (
        <div className={show ? 'side-drawer visible' : 'side-drawer'} >
            <DrawerHeader avatar={avatar} name={username} id={id}/>
            <DrawerLinks />
        </div>
    )
}

export default SideDrawer