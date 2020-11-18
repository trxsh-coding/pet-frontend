import {API_ROUTES} from "../../Constants";
import {api} from "../../Utils/fetch";
import {GET_BY_ID, GET_LIST, UPDATE_FIELD, UPDATE_PICTURE} from "../types";

export default class Actions {

    constructor(storeName, context){
        this.storeName = storeName;
        this.reducerContext = context;
    }


    setLoading(dispatch, payload){
        dispatch({
            type: this.reducerContext.actionTypes['SET_LOADING'],
            payload: payload
        });
    }



    [UPDATE_PICTURE] =  (file, route, model, id) => async (dispatch, getState) => {
        try {
            const formData = new FormData();
            formData.append(route, file);
            formData.append('id', id);
            const {data} = await api({
                URL:route === 'avatar' ?
                    API_ROUTES.UPDATE_AVATAR(this.storeName) :
                    API_ROUTES.UPDATE_BACKGROUND(this.storeName),
                METHOD:'patch',
                BODY:formData
            });
            dispatch({
                type: this.reducerContext.actionTypes['UPDATE_NESTED_FIELD'],
                payload: {
                    value : data,
                    key : id,
                    map:'data',
                    field:route,
                    nested_field:'contentURL'
                },
            });
            return data
        }catch (e) {
            console.trace(e)
        }

    }
    [UPDATE_FIELD] = ({key, value, field, map}) => async (dispatch) =>{
        dispatch({
            type: this.reducerContext.actionTypes['UPDATE_FIELD'],
            payload: {value : value, key : key, map:map, field:field},
        });
    }
    [GET_BY_ID] = id => async (dispatch) =>{
        this.setLoading(dispatch, true);
        try {
            const {data} = await api({URL:`api/v1/${this.storeName}/${id}`});

            dispatch({
                type: this.reducerContext.actionTypes['APPEND'],
                payload: data,
            });
            return data;
        }catch (e) {

            console.trace(e)

        }finally {

            this.setLoading(dispatch, false)

        }
    }

    [GET_LIST] = (sortById = false) => async (dispatch) =>{
        this.setLoading(dispatch, true);
        try {
            let {data} = await api({URL:`api/v1/${this.storeName}`});
            dispatch({
                type: this.reducerContext.actionTypes['APPEND'],
                payload: data,
            });
            return data;
        }catch (e) {

            console.trace(e)

        }finally {

            this.setLoading(dispatch, false)

        }
    }

}
