import user from "../../store/reducer";
import {chat} from "../../store/modules/chat";

export const socketEventer =  (socket, event) =>   (dispatch) =>   {
    socket.on('get-message', function(data){
       console.log(data)
        console.log('data')
       dispatch({
           type: chat.actionTypes['APPEND_TO_CHILD'],
           payload: {
               id: data.chatId,
               key:'messages',
               value: [data]
           }
       });
    });
}