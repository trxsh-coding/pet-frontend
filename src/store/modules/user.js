import Reducer from "../../store/reducer"
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
export const user = new Reducer('_USER', {data:{}, current:{}});

export const getCurrentUser = _ => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET_CURRENT_USER, METHOD:'get'});
    dispatch({
        type: user.actionTypes['SET'],
        payload: data.user,
        key:'current'
    });
};

export const getUser = id => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET_USER(id), METHOD:'get'});
    dispatch({
        type: user.actionTypes['APPEND'],
        payload: data,
    });
};

export const updateImage = (file, route) =>  async dispatch => {

    try {
        const formData = new FormData();
        formData.append(route, file);
        const {data} = await api({
            URL:route === 'avatar' ?
                API_ROUTES.UPDATE_AVATAR : API_ROUTES.UPDATE_BACKGROUND,
            METHOD:'patch',
            BODY:formData
        });
        console.log(data)
        dispatch({
            type: user.actionTypes['UPDATE_FIELD'],
            payload: {value : data, key : route, map:'current'},
        });
    }catch (e) {
        console.trace(e)
    }
};

export default user.create();
