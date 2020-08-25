import socketIOClient from "socket.io-client";
const socketState = (
    {
        response: false,
        endpoint: `http://127.0.0.1:8080?id='213'`
    }
)

export const socket  = socketIOClient(socketState.endpoint);

