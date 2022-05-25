import React from 'react';
import messageCss from './Message.module.css'

function Message() {
    return (
        <div className={messageCss.wrapper}>
            <img className={messageCss.avatar} src='https://avotar.ru/avatar/krutye/100/46.jpg'/>
            <div className={messageCss.block}>
                <h2>Artem</h2>
                <p className={messageCss.text}>npm start нажимал?</p>
                <p className={messageCss.date}>20:00</p>
            </div>
        </div>
    )
}

export default Message
