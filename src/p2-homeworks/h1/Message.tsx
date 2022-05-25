import React from 'react';
import messageCss from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}
function Message(props: MessagePropsType) {
    return (
        <div className={messageCss.wrapper}>
            <img className={messageCss.avatar} src={props.avatar}/>
            <div className={messageCss.block}>
                <h2>{props.name}</h2>
                <p className={messageCss.text}>{props.message}</p>
                <p className={messageCss.date}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
