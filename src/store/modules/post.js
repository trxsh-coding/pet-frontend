import Reducer from "../reducer";
import Actions from "../action";
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import {pet} from "./pet";
import {user} from "./user";
import {getKey} from "../../Utils/arrayMethods";
export const post = new Reducer('_POST', {data:{}});
export const postActions = new Actions('post', post)


export const getPetPosts = id =>async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET_PET_FEED(id), METHOD:'get'});
    postActions.setLoading(dispatch, true)
    dispatch({
        type: post.actionTypes['APPEND'],
        payload: data.feed,
    });
    dispatch({
        type: pet.actionTypes['SET'],
        payload:data.items,
        key:'post'
    });
    postActions.setLoading(dispatch, false)

};

export const createComment = body => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.CREATE_COMMENT, METHOD:'post', BODY:body});
    dispatch({
        type: post.actionTypes['APPEND_TO_CHILD'],
        payload: {
            id: body.id,
            key:'comments',
            value: data
        }
    });
};

export const createPost = form => async (dispatch) => {
    const formData = new FormData();

    for (let key in form){
        formData.append(key, form[key])
    }

    try {
        const {data} = await api({URL:API_ROUTES.CREATE_POST, METHOD:'post', BODY:formData});
        dispatch({
            type: post.actionTypes['APPEND'],
            payload: {
                [data.id] : data
            }
        });
        return data.id;
    } catch (e) {
        console.trace(e)
    }
};

export default post.create();
