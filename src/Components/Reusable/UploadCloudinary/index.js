import React, {useState} from 'react'
import axios from "axios";
import './style.scss'

function CloudinaryUpload({children, action}) {
    const [percentage, setPercentage] = useState(0)
    const onCloudinaryUpload = (e) =>  {

        const file = e.target.files[0];
        const data = new FormData();

        data.append('file', file);
        data.append('upload_preset', 'petsn_upload')

        const options = {
            onUploadProgress : (progressEvent) => {
                const {loaded, total} = progressEvent;
                action(Math.floor(loaded * 100 / total))
                setPercentage( Math.floor(loaded * 100 / total))
            }
        }

        axios.post(
            process.env.REACT_APP_CLOUDINARY_API +  process.env.REACT_APP_CLOUDNAME + '/upload',
            data,
            options
        )
            .then( res => console.log(res))
    }

    return (
        <div className='flex-align-center pointer'>
            <input  type='file' className='upload-input pointer' onChange={onCloudinaryUpload} />
            {children}
        </div>
    )
}
export default CloudinaryUpload