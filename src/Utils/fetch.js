import axios from 'axios'

export const api = ({URL, METHOD = 'GET', BODY, PARAMS}) => {
    return axios({
        method: METHOD,
        withCredentials:true,
        url: 'http://localhost:8080/' + URL,
        data: BODY,
        params: METHOD === 'GET' ? PARAMS : null
    });
};
