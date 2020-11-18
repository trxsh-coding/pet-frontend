import React, {useContext} from 'react';
//hooks
import { useDispatch } from "react-redux";
import {UPDATE_PICTURE} from "../../../../store/types";

//components
import ReusableImage from "../../../Reusable/Image";
import ReusableUpload from "../../../Reusable/Upload";
import { Links } from "./links";

//styles
import '../style.scss'
import {userActions} from "../../../../store/modules/user";
import history from "../../../../services/history";
import {petActions} from "../../../../store/modules/pet";
import ResponsiveContext from "../../../../Context/responsiveContext";

const ImageWrapper = ({children, route, model, current, action, id}) => {
    const dispatch = useDispatch();
    async function onUpload(props) {
        const {file, route, model, id} = props;
        const isPetRoute = history.location.pathname.includes('pet')
        isPetRoute ?
            await dispatch(petActions[UPDATE_PICTURE](file, route, model, id)) :
            await dispatch(userActions[UPDATE_PICTURE](file, route, model, id))
    }
    return  current ? (
        <ReusableUpload
            action={ (file) => onUpload({route, model, id, file})}
            type={route}
        >
            {children}
        </ReusableUpload>
    ) : <div> {children} </div>
}

function Annotation(props) {
    const {username, avatar, background} = props;
    const mobile = useContext(ResponsiveContext)
    const RenderLinks = _ => !mobile? <Links username={username} /> : null;
    return (
         <>
             <div className="annotation-wrapper relative">
                 <ImageWrapper route='background' {...props}>
                     <ReusableImage width='100%' height={ mobile ? '150px' : '300px'} fromServer link={background}/>
                 </ImageWrapper>
                 <div className="image-wrapper ">
                     <ImageWrapper route='avatar' {...props}>
                         <ReusableImage size={mobile ? 75 : 200} rounded link={avatar} fromServer />
                     </ImageWrapper>
                 </div>
                 <RenderLinks />
             </div>
         </>
     )

}

export default Annotation;
