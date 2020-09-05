import axios from 'axios'

export const api = ({URL, METHOD = 'GET', BODY, PARAMS}) => {
    return axios({
        method: METHOD,
        withCredentials:true,
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        url: process.env.REACT_APP_MAIN_API + URL,
        data: BODY,
        params: PARAMS ? PARAMS : null
    });
};
