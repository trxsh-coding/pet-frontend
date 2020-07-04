import React, {useEffect, useState} from 'react';

import ReusableImage from "../../../../Reusable/Image";
import  '../styles.scss'
import history from "../../../../../services/history";
function ShortPost(props) {
    function onRouterPush() {
        history.push(`/post/${props.id}`)
    }
    return (
        <div className="short-post" onClick={() => onRouterPush()} >
            <ReusableImage size={360}  link={props.picture} fromServer />
        </div>
    );
}

export default ShortPost;
