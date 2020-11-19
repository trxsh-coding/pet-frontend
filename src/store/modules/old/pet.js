import Reducer from "../../reducer"
import {api} from "../../../Utils/fetch";
import {API_ROUTES} from "../../../Constants";
import {user} from "../user";
import {getKey} from "../../../Utils/arrayMethods";
export const pet = new Reducer('_PET', {data:{}});


export const createPet = form => async (dispatch) => {
    let res;
    const formData = new FormData();

    for (let key in form){
        formData.append(key, form[key])
    }

    try {
        const {data} = await api({URL:API_ROUTES.CREATE_PET, METHOD:'post', BODY:formData});
        dispatch({
            type: pet.actionTypes['APPEND'],
            payload: data
        });
        dispatch({
            type: user.actionTypes['APPEND_TO_CHILD'],
            payload: {
                id: Object.values(data)[0].ownerId,
                key:'pets',
                value: [data]
            }
        });
        return getKey(data);
    } catch (e) {
        return e.response.data
    }
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
    }catch (e) {
        console.trace(e)
    }

};

export default pet.create();
