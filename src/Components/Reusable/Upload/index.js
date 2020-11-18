import React, {useContext, useState} from 'react'
import Spinner from "../Spinner";
import upload from "../../../Assets/svg/upload.svg"
import './style.scss'
import ReusableModal from "../Modal";
import ReusableCrop from "../Crop/Crop";
import ResponsiveContext from "../../../Context/responsiveContext";
const ReusableUpload = ({action,  withHover=true, children, type, withCrop = true}) => {

    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [imageURL, setImageUrl] = useState(null);
    const [visible, setVisible] = useState(false);
    const onHover = bool => setHover(bool);
    const mobile = useContext(ResponsiveContext)
    const onChange = async (file) => {
        try {

            if(withCrop){
                setFile(file)
                setVisible(true)
                setImageUrl(URL.createObjectURL(file))
            } else {
                setLoading(true);
                await action(file)
                setLoading(false)
            }
        } catch (e) {
            // setLoading(false)
        }
    }
    const onUploadAction = async e => {
        setVisible(false)
        setLoading(true);
        await action(e)
        setLoading(false)
    }
    const RenderSpinner = ({loading}) => loading ? <div className='transform-center'> <Spinner isPrimaryStyle={false}/> </div> : null;

    return (
        <div className='upload-btn-wrapper flex '
             onMouseEnter={() => onHover(true)}
             onMouseLeave={() => onHover(false)}
        >
            {children}
            {withCrop &&
                <ReusableModal
                    visible={visible}
                    title={'Выбор области'}
                    height='70%'
                    wrapperStyle={{
                        padding:mobile ? 0 : '20px'
                    }}
                    onClose={() => {
                        setVisible(false)
                        setHover(false)
                    }}
                >
                    <ReusableCrop image={imageURL} type={type} onAction={(e) => onUploadAction(e)}/>
                </ReusableModal>
            }
            <input  type="file" className='pointer' onChange={(e) => onChange(e.target.files[0])} />
            {hover && !loading && withHover && <img className='upload-icon' src={upload} alt='upload'/>}
            <RenderSpinner loading={loading}/>
        </div>
    )
};

export default ReusableUpload;
