import React, {useContext, useEffect, useState} from 'react';
import camera from '../../../../../Assets/svg/video-camera.svg'
import ReusableImage from "../../../../Reusable/Image";
import { useHistory } from "react-router-dom";
import ResponsiveContext from "../../../../../Context/responsiveContext";
import  '../styles.scss'
import {thumbnail} from "../../../../../Utils/thumbnail";

function ShortPost(props) {
    const {content} = props;
    const history = useHistory();
    function onRouterPush() {
        history.push(`/post/${props.id}`)
    }
    const mobile = useContext(ResponsiveContext)
    return (
        <div className="short-post  mb-30" onClick={() => onRouterPush()} >
            {   content.contentType ==='image' ?
                     <ReusableImage width={mobile ? '100%' : 360}  height={360} link={content} fromServer /> :
                <div className='relative'>
                    <img src={camera} alt="cameraIcon" className='cameraIcon'/>
                    <ReusableImage width={mobile ? '100%' : 360}  height={360} link={thumbnail(content.contentURL)} />
                </div>
            }
        </div>
    );
}

export default ShortPost;
