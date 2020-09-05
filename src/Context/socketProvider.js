import React, { useState, useEffect } from "react";
import SocketContext from "./socketContext";
import socketIOClient from "socket.io-client";
import {useDispatch, useSelector} from "react-redux";
import {socketEventer} from "./events";

const SocketProvider = (props) => {
    const [value, setValue] = useState({
        queueLength: 0,
        positionInLine: 0,
    });
    const dispatch = useDispatch()
    const id = useSelector( s => s.user.current)
    const socketState = (
        {
            response: true,
            endpoint: `http://127.0.0.1:8080?id=${id}`
        }
    )
    let socket = null
    function initSocket() {
        if(id) {
             socket  = socketIOClient(socketState.endpoint, {
                 transports: ['websocket'],
             })
            console.log('init')
            dispatch(socketEventer(socket, 'get-message'))
            setValue(socket)
        }
    }

    useEffect(() =>
        initSocket(), [id]
    );
    return(
        <SocketContext.Provider value={ value }>
            { props.children }
        </SocketContext.Provider>
    )
};
export default SocketProvider;