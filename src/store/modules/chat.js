import Reducer from "../reducer";
import Actions from "../action";
import user from "../reducer";
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";
export const chat = new Reducer('_CHAT', {data:[]});
export const chatActions = new Actions('chat', chat)

export const createRoom = payload => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.CREATE_CHAT_ROOM, METHOD:'POST', BODY: {receiver: payload}});
    return data;
};

export const getRoom = payload => async (dispatch) => {
    console.log(payload)
    const {data} = await api({URL:API_ROUTES.FIND_CHAT_ROOM(payload), METHOD:'GET'});
    return data;
};
export const sendMessage = payload => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.SEND_MESSAGE(payload), METHOD:'POST', BODY:payload});
    return data;
};


export default chat.create();
