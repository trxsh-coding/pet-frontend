import Reducer from "../reducer";
import Actions from "../action";
import user from "../reducer";
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
export const pet = new Reducer('_PET', {data:{}, feed:null});
export const petActions = new Actions('pet', pet)

export const followPet = id => async dispatch => {
    const {data} = await api({URL:API_ROUTES.FOLLOW_PET(id), METHOD:'post'});
    dispatch({
        type: pet.actionTypes['UPDATE_FIELD'],
        payload: {value : true, key : id, map:'data', field:'followee'},
    });
}
export const unfollowPet = id => async dispatch => {
    const {data} = await api({URL:API_ROUTES.UNFOLLOW_PET(id), METHOD:'delete'});
    dispatch({
        type: pet.actionTypes['UPDATE_FIELD'],
        payload: {value : false, key : id, map:'data', field:'followee'},
    });
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

// POSTS



export default pet.create();
