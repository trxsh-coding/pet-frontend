import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import ReusableUpload from "../../../../../Reusable/Upload";
import ImageSource from "./annotation/imageSource";
import cameraIcon from "../../../../../../Assets/svg/camera.svg";
import PropTypes from "prop-types";
import './controls.scss'
import VideoSource from "./annotation/videoSource";
import {createPost} from "../../../../../../store/modules/post";


const PostCreation = ({id}) => {

    const dispatch = useDispatch()
    const history = useHistory();

    const [type, setType] = useState(null)
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)

    const onUploadAction = (e) => {
        setFile(e)
        setType(e.type)
        setUrl(URL.createObjectURL(e))
    }

    const onSubmitVideo= async (e, d, u) => {
        const form = {
            type:'video',
            description:d,
            contentURL:u,
            authorId: id,
            publicId:e
        }
        const result = await dispatch(createPost(form));
        if(result) history.push(`/post/${result}`)
        if(result) onClearState()

    }

    const onSubmitImage = async (e, d) => {
        const form = {
            type:'image',
            file:e,
            description:d,
            authorId: id
        }
        const result = await dispatch(createPost(form));
        if(result) history.push(`/post/${result}`)
        if(result) onClearState()

    }

    const onClearState = _ => {
        setType(null);
        setFile(null);
        setUrl(null);
    }

    const RenderUploadModal = () => {
        switch (true) {
            case file && type && type.includes('image'):
                return <ImageSource
                    file={file}
                    url={url}
                    onSubmit={onSubmitImage}/>
            case file && type && type.includes('video'):
                return <VideoSource
                    file={file}
                    onSubmit={onSubmitVideo}/>
            default:
                return null
        }
    }


    return (
        <div className='video-source-wrapper'>
            <div className='create-post-button mt-15 relative'>
                <ReusableUpload action={onUploadAction} withCrop={type === 'image'} withHover={false}>
                    <img src={cameraIcon} alt="camera-icon" className='pointer'/>
                    <span className='pl-15'>Добавить фотографии</span>
                </ReusableUpload>
            </div>
            <RenderUploadModal/>
        </div>
    )
}


PostCreation.propTypes = {
    id: PropTypes.string.isRequired
};

export default PostCreation;

