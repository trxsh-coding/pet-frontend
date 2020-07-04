import React, {useState} from 'react'
import Spinner from "../Spinner";
import upload from "../../../Assets/svg/upload.svg"
import './style.scss'
const ReusableUpload = (props) => {

    const {action} = props;
    const [hover, setHover] = useState(false);
    const [loading, setLoading] = useState(false);

    const onHover = bool => setHover(bool);
    const onChange = async e => {
        try {
            setLoading(true);
            const response = await action(e.target.files[0]);
        } finally {
            setLoading(false);
        }
    };

    const RenderSpinner = loading ? <div className='transform-center'> <Spinner/> </div> : null;

    return (
        <div className='upload-btn-wrapper flex'
             onMouseEnter={() => onHover(true)}
             onMouseLeave={() => onHover(false)}
        >
            {props.children}
            <input  type="file" onChange={onChange} />
            {hover && !loading && <img className='upload-icon' src={upload} alt='upload'/>}
            {RenderSpinner}
        </div>
    )
};

export default ReusableUpload;
