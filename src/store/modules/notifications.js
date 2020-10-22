import Reducer from "../reducer";
import Actions from "../action";
import {api} from "../../Utils/fetch";
import {API_ROUTES} from "../../Constants";

export const notifications = new Reducer('_NOTIFICATION', {data:[], unreadCount:0});
export const notificationsActions = new Actions('notification', notifications)

export const getNotificationsCount = _ => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.GET_NOTIFICATIONS_COUNT, METHOD:'GET'});
    dispatch({
        type: notifications.actionTypes['SET'],
        payload: data,
        key:'unreadCount',
    });
    return data;
};

export const readNotifications = _ => async (dispatch) => {
    const {data} = await api({URL:API_ROUTES.READ_NOTIFICATIONS, METHOD:'PATCH'});
    dispatch({
        type: notifications.actionTypes['SET'],
        payload: 0,
        key:'unreadCount',
    });
    return data;
};


export default notifications.create();
