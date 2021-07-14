import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';

export const SendMessage = () => {
    const [message, setMessage] = useState('');
    const { socket } = useContext(SocketContext);
    const { auth: {uid}} = useContext(AuthContext)
    const { chatState: { chatActivo} } = useContext(ChatContext)

    const onChange = ({ target: { value }} ) => {
        setMessage(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(message.length === 0) return;
        setMessage('');

        // TODO: Emitir un evento de socket para enviar el mensaje
        // {
        //     de: // UID del usuario enviando el mensaje
        //     para: // UID del usuario que recibe el mensaje
        //     mensaje: // lo que quiero enviar 
        // }

        socket.emit('mensaje-personal', {
            de: uid,
            para: chatActivo,
            mensaje: message
        });

        // TOD: hacer el dispatch de el mensaje
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input 
                        type="text" 
                        className="write_msg" 
                        placeholder="Mensaje..."
                        value={ message }
                        onChange={ onChange } 
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
