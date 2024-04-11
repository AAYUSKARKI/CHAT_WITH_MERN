import React from 'react'
import Sendinput from './Sendinput'
import Messages from './Messages'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
    const { selecteduser } = useSelector(store => store.user)
    return (
        <>
            {
                selecteduser ? (
                    <div className='md:min-w-[450px] flex flex-col'>
                        <div className='flex gap-2 items-center bg-zinc-800 text-white py-2 px-4 mb-2 ' >
                            <div className='avatar online'>
                                <div className='w-11 rounded-full '>
                                    <img src={selecteduser?.profilePhoto} />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex gap-2 justify-between'>
                                    <p>{selecteduser?.fullname}</p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <Sendinput />
                    </div>
                ) : (<>
                    <h1>Welcome To Chat App</h1>
                    <p>By Aayus Karki</p>
                </>
                )
            }
        </>

    )
}

export default MessageContainer