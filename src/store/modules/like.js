import Reducer from "../reducer";
import Actions from "../action";
import user from "../reducer";
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import {chat} from "./chat";
import {post} from "./post";
import {pet} from "./pet";
export const like = new Reducer('_LIKE', {data:[]});
export const likeActions = new Actions('chat', like)

export const createLike = (id, ownerId, petId) => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.CREATE_LIKE(id), METHOD:'POST', BODY: {ownerId, petId}});
    dispatch({
        type: like.actionTypes['APPEND_TO_CHILD'],
        payload: {
            id: id,
            key:'likes',
            value: [data]
        }
    });
    dispatch({
        type: post.actionTypes['UPDATE_FIELD'],
        payload: {value : data.id, key : id, map:'data', field:'likeId'},
    });
    dispatch({
        type: post.actionTypes['CHANGE_QUANTITY'],
        payload: {key : id, map:'data', field:'amountOfLikes', type:'increase'},
    });
    return data;
};


export const deleteLike = (id, likeId) => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.DELETE_LIKE(likeId), METHOD:'DELETE' });
    dispatch({
        type: post.actionTypes['UPDATE_FIELD'],
        payload: {value : null, key : id, map:'data', field:'likeId'},
    });
    dispatch({
        type: post.actionTypes['CHANGE_QUANTITY'],
        payload: {key : id, map:'data', field:'amountOfLikes', type:'decrease'},
    });
    console.log(data)
    return data;
};



export default like.create();
