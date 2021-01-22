import React, {useCallback, useContext, useRef, useState} from "react";
import ReusableUpload from "../../../../../Reusable/Upload";
import cameraIcon from "../../../../../../Assets/svg/camera.svg";
import ReusableModal from "../../../../../Reusable/Modal";
import ReusablePlayer from "../../../../../Reusable/VideoPlayer";
import ReusableInput from "../../../../../Reusable/Input";
import ReusableCrop from "../../../../../Reusable/Crop/Crop";
import {useDispatch} from "react-redux";
import {createPost} from "../../../../../../store/modules/post";
import ReusableButton from "../../../../../Reusable/Button";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import ProgressReusable from "../../../../../Reusable/Progress";
import ResponsiveContext from "../../../../../../Context/responsiveContext";

const initialState = {
    file: null,
    url: null,
    visible: false,
    type: null,
    publicId: null
}

function PostCreate({authorId}) {
    const [state, setState] = useState(Object.assign({}, initialState));
    const [description, setDescription] = useState('')
    const [percentage, setPercentage] = useState(0)
    const [disabled, setDisabled] = useState(true)
    const onStateChange = (field, value) => setState(state => {
        return {
            ...state,
            [field]: value
        }
    })
    const mobile = useContext(ResponsiveContext)
    const isCorrectFile = state.file && (state.file.type.includes('video') || state.file.type.includes('image'))
    const inputEl = useRef(null);

    async function onPostCreate() {
        console.log(description)
        const media = state.type === 'video' ? {
            type: state.type,
            publicId: state.publicId,
            contentURL: state.url,
        } : {
            type: state.type,
            file: state.file,
        }
        let form = {
            authorId,
            ...media,
            description
        }
        console.log(form)
        // const result = await dispatch(createPost(form));

        // if(result) history.push(`/post/${result}`)
    }

    const RenderMedia = ({children}) => state.type === 'video'
        ? <div className='mt-20'>
            {
                state.publicId === null
                    ? <ProgressReusable progress={percentage} width='100%'/>
                    : <ReusablePlayer publicId={state.publicId}/>
            }
            {children}

        </div>
        : <div className='mt-20'>

        </div>

    const onCloudinaryUpload = async (e) => {

        try {
            const data = new FormData();

            data.append('file', e);
            data.append('upload_preset', 'petsn_upload')

            const options = {
                onUploadProgress: (progressEvent) => {
                    const {loaded, total} = progressEvent;
                    let percentage = Math.floor(loaded * 100 / total)
                    setPercentage(percentage)
                }
            }
            setState((state) => {
                    return {
                        ...state,
                        visible: true,
                        file: e,
                        type: 'video',
                    }
                }
            )
            axios.post(process.env.REACT_APP_CLOUDINARY_API + process.env.REACT_APP_CLOUDNAME + '/upload',
                data,
                options
            )
                .then(({data}) => {
                    onStateChange('url', data.url)
                    onStateChange('publicId', data.public_id)
                    setDisabled(false)
                })
        } catch (e) {
            console.trace(e)
        }
    }

    async function onUploadAction(e) {
        if (e.type.includes('video')) {
            onCloudinaryUpload(e)
        } else if (e.type.includes('image')) {

            setState((state) => {
                    return {
                        ...state,
                        visible: true,
                        file: e,
                        type: 'image',
                        url: URL.createObjectURL(e)
                    }
                }
            )
        } else {
            alert('Файл поддержки')
        }
    }

    return (
        <div className='create-post-button flex-align-center mt-30 pointer relative pointer'>
            <ReusableUpload action={(e) => onUploadAction(e)} withCrop={state.type === 'image'} withHover={false}>
                <img src={cameraIcon} alt="camera-icon" className='pointer'/> <span className='pl-15'>Добавить фотографии</span>
            </ReusableUpload>
            <ReusableModal
                width={mobile ? '100%' : '700px'}
                height={mobile ? '100%' : 'fit-content'}
                styles={{position: 'fixed'}}
                visible={state.visible}
                onClose={() => setState(initialState)}
            >
                <div style={{width: '100%', height: 'fit-content'}}>
                    <RenderMedia>
                        <ReusableInput
                            ref={inputEl}
                            children='none'
                            styles={{width: '100%'}}
                            onChange={(e) => setDescription(e)}
                            value={description}
                            autoFocus
                            type='textarea'
                            fixedSize={106}
                        />
                    </RenderMedia>
                </div>
            </ReusableModal>
        </div>
    )
}

export default PostCreate;
