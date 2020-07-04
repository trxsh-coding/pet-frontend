import {api} from "../Utils/fetch";
import {API_ROUTES} from "../Constants";

export const getStatus = () => {
    return api({URL:API_ROUTES.GET_STATUS, METHOD:'GET'});
};
