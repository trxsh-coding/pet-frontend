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
            endpoint: `${process.env.REACT_APP_MAIN_API}?id=${id}`
        }
    )
    let socket = null
    function initSocket() {
        if(id) {
             socket  = socketIOClient(socketState.endpoint, {
                 transports: ['websocket'],
             })
            setValue(socket)
            dispatch(socketEventer(socket, 'get-message'))
        }
    }

    useEffect(() => {
        initSocket()
    }, [id]);
    return(
        <SocketContext.Provider value={ value }>
            { props.children }
        </SocketContext.Provider>
    )
};
export default SocketProvider;