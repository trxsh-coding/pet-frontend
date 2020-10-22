import React, {useContext, useEffect, useState} from 'react';

import ReusableImage from "../../../../Reusable/Image";
import { useHistory } from "react-router-dom";
import ResponsiveContext from "../../../../../Context/responsiveContext";
import  '../styles.scss'

function ShortPost(props) {
    const history = useHistory();
    function onRouterPush() {
        history.push(`/post/${props.id}`)
    }
    const mobile = useContext(ResponsiveContext)
    return (
        <div className="short-post" onClick={() => onRouterPush()} >
            <ReusableImage width={mobile ? '100%' : 360}  height={360} link={props.picture} fromServer />
        </div>
    );
}

export default ShortPost;
