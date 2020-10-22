import React from 'react'
import {ROUTE_NAMES} from "../../../../../Constants";
import history from "../../../../../services/history";
import {useHistory} from 'react-router-dom'

function DrawerLinks() {
    const history = useHistory()
    const RenderRouteList = _ => Object.keys(ROUTE_NAMES.MAIN).map( el => {
        return el !== 'CHAT' && (
            <div className='mobile-links-wrapper' onClick={() => {
                el === '/' ? history.push('/') : history.push(`/${el.toLocaleLowerCase()}`)
            }}>
                <span className='pt-20'>{ROUTE_NAMES.MAIN[el]}</span>
            </div>
        )
    })
    return (
        <div >
            <RenderRouteList />
        </div>
    )
}

export default DrawerLinks;