import {STORE_TYPES} from "../types";
import Actions from "../action";

export const storeActions = _ => {
    let actions = {};
    for (let key in STORE_TYPES){
        actions[key] = new Actions(key)
    }
    return actions
};
