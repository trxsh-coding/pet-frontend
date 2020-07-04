import Reducer from "../../store/reducer"
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
const auth = new Reducer('_AUTH', {status:null});
const user = new Reducer('_USER');

export const signIn = payload => async (dispatch) => {
    try {
        const {data} = await api({URL:API_ROUTES.SIGN_IN, METHOD:'POST', BODY:payload});
        dispatch({
            type: auth.actionTypes['SET'],
            payload: data ? 'success' : 'fail',
            key:'status'
        });
        dispatch({
            type: user.actionTypes['SET'],
            payload: data.user,
            key:'current'
        });

        return 'success'
    } catch (e) {
        return 'fail'
    } finally {

    }

};


export const signUp = payload => async (dispatch) => {
    try {
        const {data} = await api({URL:API_ROUTES.SIGN_UP, METHOD:'POST', BODY:payload});
        return 'success'
    } catch (e) {
        return 'fail'
    } finally {

    }

};

export const checkStatus = _ => async (dispatch) => {
    try {
        const {data} = await api({URL:API_ROUTES.GET_STATUS, METHOD:'GET'});
        dispatch({
            type: auth.actionTypes['SET'],
            key:'status',
            payload:true
        });
        return 'success'
    } catch (e) {
        return 'fail'
    } finally {

    }

};


export const setStatus = payload => (dispatch) => {
    dispatch({
        type: auth.actionTypes['SET'],
        payload,
        key:'status'
    });


};


export default auth.create();
