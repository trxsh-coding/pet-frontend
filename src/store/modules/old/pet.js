import Reducer from "../../reducer"
import {api} from "../../../Utils/fetch";
import {API_ROUTES} from "../../../Constants";
import {user} from "../user";
export const pet = new Reducer('_PET', {data:{}});


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

export const getPet = id => async (dispatch) => {
    try {
        const {data} = await api({URL:API_ROUTES.GET_PET_BY_ID(id), METHOD:'get'});
        dispatch({
            type: pet.actionTypes['APPEND'],
            payload: {
                [data._id] : data
            },
        });
        console.log(data)
    }catch (e) {
        console.trace(e)
    }

};

export default pet.create();
