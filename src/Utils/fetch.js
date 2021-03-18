import axios from 'axios'

export const api = ({URL, METHOD = 'GET', BODY, PARAMS}) => {
    return axios({
        method: METHOD,
        withCredentials:true,
        url: process.env.REACT_APP_MAIN_API + URL,
        data: BODY,
        params: PARAMS ? PARAMS : null
    });
};

export const cloudinaryApi = async (file) => {
     return axios({
        method: 'POST',
        url: process.env.REACT_APP_CLOUDINARY_API +  process.env.REACT_APP_CLOUDNAME + '/upload',
        data: file,
    });
};