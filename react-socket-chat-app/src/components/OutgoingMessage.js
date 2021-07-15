import React from 'react'

export const OutgoingMessage = ({ msg }) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{ msg.mensaje }</p>
                <span className="time_date"> { msg.fecha } </span>
            </div>
        </div>
    )
}
