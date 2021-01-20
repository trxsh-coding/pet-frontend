import {useDispatch, useSelector} from "react-redux";
import {ROUTE_NAMES} from "../../../../Constants";
import {Link} from "react-router-dom";
import React from "react";
import {useHistory, useLocation} from 'react-router-dom'
export const Links = ({username, id}) => {
    const history = useHistory()
    const location = useLocation()
    const links = Object.keys(ROUTE_NAMES.SHORT).map((route, index) => {

        const currentLocation = location.pathname === route.toLowerCase()

        console.log(currentLocation)
        return  (
            <Link key={index}
                  to={`/${route.toLowerCase()}`}
                  style={{textDecoration: currentLocation ? 'underline' : ''}}
                  activeClassName="active">{ROUTE_NAMES.MAIN[route]}
            </Link>
        )
    });

    return (
        <div className="annotation-nav relative flex-align-center">
            <div className="overlay" />
            <div className="user-annotation-left-column">
                <span className='pointer' onClick={() => history.push(`/user/${id}`)}>{username}</span>
            </div>
            <div className='links-wrapper'> {links} </div>
        </div>
    )
};
