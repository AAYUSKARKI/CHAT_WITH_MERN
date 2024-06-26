import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
const Message = ({ message }) => {
    const scroll = useRef()
    console.log('message is',message)
    const { authuser , selecteduser} = useSelector(store => store.user)
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])
    return (
        <div ref={scroll} className={`chat ${authuser?._id === message?.senderId ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={message.senderId === authuser?._id ? authuser?.profilePhoto : selecteduser?.profilePhoto} />
                </div>
            </div>
            <div className="chat-header">
                {/* Obi-Wan Kenobi */}
                <time className="text-xs opacity-50 text-white">12:45</time>
            </div>
            <div className="chat-bubble">{message}</div>
            {/* <div className="chat-footer opacity-50">
                Delivered
            </div> */}
        </div>
    )
}

export default Message