import Reducer from "../../store/reducer"
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import Actions from "../action";
import {getKey} from "../../Utils/arrayMethods";
import {pet} from './pet'
export const user = new Reducer('_USER', {data:{}, current:null, subscriptions:[]});
const actions = new Actions('user', user);
export const userActions = actions;

export const getCurrentUser = _ => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET_CURRENT_USER, METHOD:'get'});
    dispatch({
        type: user.actionTypes['APPEND'],
        payload: data,
    });

    dispatch({
        type: user.actionTypes['SET'],
        payload: getKey(data),
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

export const getSubscriptions = _ =>async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET_SUBSCRIPTIONS, METHOD:'get'});
    dispatch({
        type: pet.actionTypes['APPEND'],
        payload: data.subscriptions,
    });
    dispatch({
        type: user.actionTypes['SET'],
        payload:data.items,
        key:'subscriptions'
    });
};


export const updateImage = (file, route, model) =>  async (dispatch, getState) => {
    const state = getState()
    console.log(state)
    try {
        const formData = new FormData();
        formData.append(route, file);

        const {data} = await api({
            URL:route === 'avatar' ?
                API_ROUTES.UPDATE_AVATAR(model) : API_ROUTES.UPDATE_BACKGROUND,
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
