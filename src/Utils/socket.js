import socketIOClient from "socket.io-client";

const socketState = {
    response: false,
    endpoint: "http://127.0.0.1:4000"
};

export const socketioConnection = () => {
    const socket = socketIOClient(socketState.endpoint);
    socket.on("chat message", data => console.log(data));
};
