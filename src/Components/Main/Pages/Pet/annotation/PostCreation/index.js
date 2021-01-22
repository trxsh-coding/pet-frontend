import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import ReusableUpload from "../../../../../Reusable/Upload";
import cameraIcon from "../../../../../../Assets/svg/camera.svg";
import React from "react";

const PostCreation = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const onUploadAction = (e) => {
        console.log(e)
    }
    return (
        <div>
            <ReusableUpload action={(e) => onUploadAction(e)} withCrop={state.type === 'image'} withHover={false}>
                <img src={cameraIcon} alt="camera-icon" className='pointer'/> <span className='pl-15'>Добавить фотографии</span>
            </ReusableUpload>
        </div>
    )
}
export default PostCreation;