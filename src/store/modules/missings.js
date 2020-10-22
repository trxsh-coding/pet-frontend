import Reducer from "../reducer";
import Actions from "../action";
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
import {chat} from "./chat";
import {pet} from "./pet";

export const missing = new Reducer('_MISSING', {data:{}});
export const missingActions = new Actions('missing', missing)
export const setModal = payload => dispatch => {

}
export const createMissing = payload => async (dispatch) => {
    const formData = new FormData();
    console.log(payload.coordinates)
    for (let key in payload){
        if(key !== 'images' && key !== 'coordinates') formData.append(key, payload[key])
    }
    for (let key in payload.coordinates){
       formData.append('coordinates', payload.coordinates[key])
    }
    for (let key in payload.images){
        if(payload.images[key] !== null) formData.append('images', payload.images[key])
    }
    try {
        const {data} = await api({URL:API_ROUTES.CREATE_MISSING, METHOD:'POST', BODY: formData});
        dispatch({
            type: pet.actionTypes['APPEND'],
            payload: {
                [data._id] : data
            },
        });
        return data._id;

    }catch (e) {
        console.trace(e)
    }
};


export default missing.create();
