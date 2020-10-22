import Reducer from "../reducer";
import Actions from "../action";
import user from "../reducer";
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import {postActions} from "./post";
export const pet = new Reducer('_PET', {data:{}, feed:[], search:[], post:[]});
export const petActions = new Actions('pet', pet)


export const searchPet = query => async dispatch => {
    const {data} = await api({URL:API_ROUTES.SEARCH_PETS_BY_QUERY, METHOD:'get', PARAMS:query});
    petActions.setLoading(dispatch, true)
    dispatch({
        type: pet.actionTypes['APPEND'],
        payload:data.pets,
    });
    dispatch({
        type: pet.actionTypes['SET'],
        payload:data.items,
        key:'search'
    });
    petActions.setLoading(dispatch, false)

}

export const followPet = id => async dispatch => {
    try {
        const {data} = await api({URL:API_ROUTES.FOLLOW_PET(id), METHOD:'post'});
        dispatch({
            type: pet.actionTypes['UPDATE_FIELD'],
            payload: {value : true, key : id, map:'data', field:'followee'},
        });
        dispatch({
            type: pet.actionTypes['CHANGE_QUANTITY'],
            payload: {key : id, map:'data', field:'amountOfFollowers', type:'increase'},
        });
    }catch (e) {

    }
}
export const unfollowPet = id => async dispatch => {
    try {
        const {data} = await api({URL:API_ROUTES.UNFOLLOW_PET(id), METHOD:'delete'});
        dispatch({
            type: pet.actionTypes['UPDATE_FIELD'],
            payload: {value : false, key : id, map:'data', field:'followee'},
        });
        dispatch({
            type: pet.actionTypes['CHANGE_QUANTITY'],
            payload: {key : id, map:'data', field:'amountOfFollowers', type:'decrease'},
        });
    }catch (e) {

    }
}

export const createPet = form => async (dispatch) => {
    let res;
    try {
        const {data} = await api({URL:API_ROUTES.CREATE_PET, METHOD:'post', BODY:form});
        dispatch({
            type: pet.actionTypes['APPEND'],
            payload: {
                [data._id] : data
            },
        });
        dispatch({
            type: user.actionTypes['APPEND_TO_CHILD'],
            payload: {
                id: data.ownerId,
                key:'pets',
                value: [data]
            }
        });
        res = data;
    } catch (e) {
        console.trace(e)
    }
    return res;
};

export const updatePet = (payload, id) => async (dispatch) => {
    console.log(payload)
    try {
        const {data} = await api({URL:API_ROUTES.UPDATE_PET(id), METHOD:'patch', BODY:payload});
        return 'success'
    } catch (e) {

    }
};
// POSTS



export default pet.create();
