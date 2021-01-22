import axios from "axios";

export const onCloudinaryUpload = async (e, onProgress) => {
    try {
        let response;
        const data = new FormData();
        data.append('file', e);
        data.append('upload_preset', 'petsn_upload')
        const options = {
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                let percentage = Math.floor(loaded * 100 / total)
                onProgress(percentage)
            }
        }
        await axios.post(process.env.REACT_APP_CLOUDINARY_API + process.env.REACT_APP_CLOUDNAME + '/upload',
            data,
            options
        ).then(({data}) => response = data)
        return response;
    } catch (e) {
        console.trace(e)
    }
}