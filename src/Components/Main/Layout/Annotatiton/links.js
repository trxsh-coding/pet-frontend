import {useDispatch, useSelector} from "react-redux";
import {ROUTE_NAMES} from "../../../../Constants";
import {Link} from "react-router-dom";
import ReusableUpload from "../../../Reusable/Upload";
import ReusableImage from "../../../Reusable/Image";
import avatar from "../../../../Assets/img/avatar.png";
import React from "react";
import {updateAvatar} from "../../../../store/modules/user";

export const Links = ({username}) => {

    const links = Object.keys(ROUTE_NAMES.MAIN).map((route, index) => {
        return  (
            <Link key={index} to={`/${route.toLowerCase()}`} activeClassName="active">{ROUTE_NAMES.MAIN[route]}</Link>
        )
    });

    return (
        <div className="annotation-nav relative flex-align-center">
            <div className="overlay" />
            <div className="user-annotation-left-column">
                <span>{username}</span>
            </div>
            <div className='links-wrapper'> {links} </div>
        </div>
    )
};
