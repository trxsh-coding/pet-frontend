import React from 'react';
//hooks
import { useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
import {UPDATE_PICTURE} from "../../../../store/types";

//components
import ReusableImage from "../../../Reusable/Image";
import ReusableUpload from "../../../Reusable/Upload";
import { Links } from "./links";

//styles
import '../style.scss'

const ImageWrapper = ({children, route, model, current, action, id}) => {
    const dispatch = useDispatch();
    const onUpload = (route, model, id) => file => dispatch(action[UPDATE_PICTURE](file, route, model, id))
    return  current ? (
        <ReusableUpload action={onUpload(route, model, id)}>
            {children}
        </ReusableUpload>
    ) : <div> {children} </div>
}

function Annotation(props) {
    const {username, avatar, background} = props;
     return (
         <>
             <div className="annotation-wrapper relative">
                 <ImageWrapper route='background' {...props}>
                     <ReusableImage width='100%' height='300px' fromServer link={background}/>
                 </ImageWrapper>
                 <div className="image-wrapper ">
                     <ImageWrapper route='avatar' {...props}>
                         <ReusableImage size={200} rounded link={avatar} fromServer />
                     </ImageWrapper>
                 </div>
                 <Links username={username} />
             </div>
         </>
     )

}

export default withRouter(Annotation);
