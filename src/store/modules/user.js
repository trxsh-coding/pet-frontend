import Reducer from "../../store/reducer"
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import Actions from "../action";
import {getKey} from "../../Utils/arrayMethods";
import {pet} from './pet'
import {post} from "./post";

export const user = new Reducer('_USER', {data:{}, current:null, subscriptions:[], bookmarks:[]});
export const userActions = new Actions('user', user)

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

export const updateUser = (payload) => async (dispatch) => {
    console.log(payload)
    try {
        const {data} = await api({URL:API_ROUTES.UPDATE_USER, METHOD:'patch', BODY:payload});
        return 'success'
    } catch (e) {

    }
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
export const getBookmarksFeed = _ => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET_BOOKMARKS_FEED, METHOD:'get'});
    const {posts, items} = data;
    dispatch({
        type: post.actionTypes['APPEND'],
        payload: posts,
    });
    dispatch({
        type: user.actionTypes['SET'],
        payload:items,
        key:'bookmarks'
    });
};






export const updateImage = (file, route, model) =>  async (dispatch, getState) => {
    const state = getState()
    try {
        const formData = new FormData();
        formData.append(route, file);

        const {data} = await api({
            URL:route === 'avatar' ?
                API_ROUTES.UPDATE_AVATAR(model) : API_ROUTES.UPDATE_BACKGROUND,
            METHOD:'patch',
            BODY:formData
        });
        dispatch({
            type: user.actionTypes['UPDATE_FIELD'],
            payload: {value : data, key : route, map:'current'},
        });
    }catch (e) {
        console.trace(e)
    }
};

export default user.create();
