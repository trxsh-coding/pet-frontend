import React, {createContext, useEffect, useRef} from 'react';
import menu from '../../../../Assets/svg/menu.svg'
import logo from '../../../../Assets/svg/logo.svg'
import search from '../../../../Assets/svg/search.svg'
import plus2 from '../../../../Assets/svg/plus2.svg'

import '../style.scss'
import {ROUTE_NAMES} from "../../../../Constants";
import {useLocation} from 'react-router-dom'
import MobileMenu from "./Menu";
import useHookWithRefCallback from "../../../../CustomHooks/useHookWithRef";
import {useHistory} from 'react-router-dom';

function MobileHeader({action}) {
    const history = useHistory();

    const onRouterPush = route => {
        history.push(`/${route}`)
    }
    const location = useLocation();
    useEffect(() => {
    }, [location])
    const RenderLogoIcon = _ =>
        <img src={logo} height={38} width={47} alt="logo" onClick={() => onRouterPush('')}/>

    const RenderTitle = ({title}) => {
        return (
            <span className='title'>{ROUTE_NAMES.MAIN[title.toUpperCase()]}</span>
        )
    }
    const RenderHeaderTitle = _ => {

        const routeName = location.pathname.substring(1)

        switch (routeName) {
            case 'search':
            case 'chat':
            case 'notifications':
            case 'subscriptions':
                return <RenderTitle title={routeName}/>
            default :
                return <RenderLogoIcon/>
        }
    }

    const RenderHeaderActionButton = _ => {
        const routeName = location.pathname.substring(1)
        switch (routeName) {
            case 'search':
            case 'chat':
            case 'notifications':
            case 'subscriptions':
                return  <img src={search} height={24} width={24} alt="search" onClick={() => onRouterPush('search')}/>
            // case 'missings':
            //     return  <img src={plus2} height={26} width={26} alt="search" />
            default :
                return  <img src={search} height={24} width={24} alt="search" onClick={() => onRouterPush('search')}/>
        }

    }

    return (
        <div className='mobile-header flex-between flex flex-align-center'>
            <MobileMenu />
            <RenderHeaderTitle />
            <RenderHeaderActionButton />

        </div>
    )
}

export default MobileHeader