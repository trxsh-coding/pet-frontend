import Reducer from "../reducer";
import {GET_BY_ID} from "../types";
import {api} from "../../Utils/fetch";

export default class Actions {

    constructor(storeName){
        this.storeName = storeName;
        this.reducerContext = new Reducer(`_${storeName.toUpperCase()}`, {});
    }


    setLoading(dispatch, payload){
        dispatch({
            type: this.reducerContext.actionTypes['SET_LOADING'],
            payload: payload
        });
    }
    async [GET_BY_ID](dispatch, payload){

        this.setLoading(dispatch, true);
        try {
            const {data} = await api({URL:`api/v1/${this.storeName}/${payload}`});

            // dispatch({
            //     type: this.reducerContext.actionTypes['APPEND'],
            //     payload: {
            //         data[this.storeName]
            //     },
            //     key:'data'
            // });

        }catch (e) {

            console.trace(e)

        }finally {

            this.setLoading(dispatch, false)

        }
    }

}
