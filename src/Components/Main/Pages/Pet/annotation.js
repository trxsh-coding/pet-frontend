import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReusableImage from "../../../Reusable/Image";
import ReusableUpload from "../../../Reusable/Upload";
import { useDispatch, useSelector } from "react-redux";
import {Links} from "../../Layout/Annotatiton/links";

function PetAnnotation(props) {

    const {username, avatar, background, id} = props;

    const dispatch = useDispatch();

    return (
        <>
            <div className="annotation-wrapper relative">
                 <ReusableImage width='100%' height='300px' fromServer link={background}/>
                <div className="image-wrapper">
                    <ReusableImage size={200} rounded link={avatar} fromServer />
                </div>
                <Links username={username} />
            </div>
        </>
    )

}

export default withRouter(PetAnnotation);
