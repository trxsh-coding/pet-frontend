import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import {post} from "./post";

export const createLike = (id) => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.CREATE_LIKE(id), METHOD:'POST'});
    dispatch({
        type: post.actionTypes['APPEND_TO_CHILD'],
        payload: {
            id: id,
            key:'likes',
            value: [data]
        }
    });
    dispatch({
        type: post.actionTypes['UPDATE_FIELD'],
        payload: {value : data, key : id, map:'data', field:'likeId'},
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



