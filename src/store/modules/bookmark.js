import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import {post} from "./post";

export const createBookmark = (id) => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.CREATE_BOOKMARK, METHOD:'POST', BODY:{postId:id}});

    dispatch({
        type: post.actionTypes['UPDATE_FIELD'],
        payload: {value : data, key : id, map:'data', field:'bookmark'},
    });

    return data;
};


export const deleteBookmark = (id) => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.DELETE_BOOKMARK, METHOD:'DELETE', BODY:{postId:id}});
    dispatch({
        type: post.actionTypes['UPDATE_FIELD'],
        payload: {value : null, key : id, map:'data', field:'bookmark'},
    });
    return data;
};



