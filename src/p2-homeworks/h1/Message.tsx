import React from 'react'
import sh from './Message.module.css'
export type MassageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MassageType) {
    return (
        <div className={sh.message}>
            <div className={sh.message}>
                <img src={props.avatar} alt="" className={sh.ava}/>
            </div>

            <div className={sh.ugol}> </div>

            <div className={sh.sms}>
                <div className={sh.name}>
                    {props.name}
                </div>
                <div className={sh.text}>
                    {props.message}
                </div>
                <div className={sh.time}>
                    {props.time}
                </div>
            </div>
        </div>
)
}

export default Message
