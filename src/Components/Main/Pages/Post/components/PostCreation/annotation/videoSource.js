import PropTypes from 'prop-types';
import React, {useContext, useEffect, useState} from "react";
import ReusableModal from "../../../../../../Reusable/Modal";
import ResponsiveContext from "../../../../../../../Context/responsiveContext";
import {onCloudinaryUpload} from "../../../../../../../Utils/cloudinaryUpload";
import ProgressReusable from "../../../../../../Reusable/Progress";
import ReusablePlayer from "../../../../../../Reusable/VideoPlayer";
import ReusableInput from "../../../../../../Reusable/Input";
import '../controls.scss'
import ReusableButton from "../../../../../../Reusable/Button";

const VideoSource = (props) => {

    const {file, onSubmit} = props;

    const mobile = useContext(ResponsiveContext);

    const [percentages, setPercentages] = useState(0);
    const [publicID, setPublicID] = useState(null)
    const [url, setUrl] = useState('')

    const [description, setDescription] = useState('')

    useEffect(() => {
        onInitialize()
        console.log('init')
    }, [file])

    const onInitialize = async () => {
        const data = await onCloudinaryUpload(file, (e) =>  setPercentages(e));
        const {url, public_id} = data;
        setUrl(url);
        setPublicID(public_id)
    }

    const RenderContent = () => !publicID
        ? <ProgressReusable progress={percentages}
                            width='100%'
                            styles={{marginTop:'20px'}}/>
        : <ReusablePlayer publicId={publicID} autoplay/>


    return (
        <ReusableModal
            width={mobile ? '100%' : '700px'}
            height={mobile ? '100%' : 'fit-content'}
            styles={{position: 'fixed'}}
            visible={true}>
            <div className='description-wrapper flex-column'>
                <RenderContent />
                <ReusableInput
                    children='none'
                    styles={{width: '100%', marginTop:'20px'}}
                    onChange={(e) => setDescription(e)}
                    value={description}
                    autoFocus
                    type='textarea'
                    fixedSize={106}
                />
                <ReusableButton
                    styles={{backgroundColor: !publicID ? 'gray' : '#4A76A8', marginTop:'20px'}}
                    action={() => onSubmit(publicID, description, url)}
                    disabled={!publicID}>
                    Сохранить
                </ReusableButton>
            </div>
        </ReusableModal>
    )
}

VideoSource.propTypes = {
    file: PropTypes.object.isRequired,
    onSubmit: PropTypes.object.isRequired,
    children: PropTypes.element,
};

export default VideoSource;
