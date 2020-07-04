import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReusableImage from "../../../Reusable/Image";
import { Links } from "./links";
import ReusableUpload from "../../../Reusable/Upload";
import { useDispatch, useSelector } from "react-redux";
import { updateImage } from "../../../../store/modules/user";
import '../style.scss'
import {AnnotationInfo} from "./info";

function Annotation(props) {

    const {username, avatar, background, id} = props;

    const dispatch = useDispatch();

    const onUpload = route => file => {

        dispatch(updateImage(file, route))

    };
     return (
         <>
             <div className="annotation-wrapper relative">
                 <ReusableUpload action={onUpload('background')}>
                     <ReusableImage width='100%' height='300px' fromServer link={background}/>
                 </ReusableUpload>
                 <div className="image-wrapper ">
                     <ReusableUpload action={onUpload('avatar')}>
                         <ReusableImage size={200} rounded link={avatar} fromServer />
                     </ReusableUpload>
                 </div>
                 <Links username={username} />
             </div>
         </>
     )

}

export default withRouter(Annotation);
