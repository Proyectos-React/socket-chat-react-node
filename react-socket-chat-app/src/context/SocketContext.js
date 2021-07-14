import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket'
import { ChatContext } from './chat/ChatContext';

import { types } from '../types/types';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        if (auth.logged) {
            connectSocket()
        }
    }, [auth, connectSocket]);

    useEffect(() => {
        if (!auth.logged) {
            disconnectSocket()
        }
    }, [auth, disconnectSocket])

    // Escuchar los cambios en los usuarios conectados
    useEffect(() => {
        socket?.on('lista-usuarios', (usuarios) => {
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios
            })
        })
    }, [socket, dispatch]);

    useEffect(() => {
        socket?.on('mensaje-personal', (mensaje) => {
            // TODO: Dispatch de una acción
            dispatch({
                type: types.nuevoMensaje,
                payload: mensaje
            });
            // TODO: Mover el scroll al final
            scrollToBottomAnimated('mensajes');
        });
    }, [socket, dispatch])
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}