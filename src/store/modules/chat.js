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

export const sendMessageWithRoom = payload => async (dispatch) => {
    const {data} = await api({
        URL:API_ROUTES.SEND_MESSAGE_WITH_ROOM,
        METHOD:'POST',
        BODY: {receiverId: payload.receiver, description: payload.description },
    });
    return data;
};


export const getRoomById = payload => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET, METHOD:'POST', BODY: {receiver: payload}});
    return data;
};

export const getRoom = payload => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.FIND_CHAT_ROOM(payload), METHOD:'GET'});
    return data;
};
export const sendMessage = (payload, socket) => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.SEND_MESSAGE, METHOD:'POST', BODY: {
        receiverId:payload.receiverId,description:payload.description, chatId:payload.chatId
        }}, );
    socket.emit('private-message', payload)
    dispatch({
        type: chat.actionTypes['APPEND_TO_CHILD'],
        payload: {
            id: data.chatId,
            key:'messages',
            value: [data]
        }
    });
    return data;
};


export default chat.create();
