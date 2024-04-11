import React, { useState } from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import { setmessages } from '../Redux/messageslice';
const Sendinput = () => {
  const [message,setinput] = useState('');
  const dispatch = useDispatch()
  const {selecteduser} = useSelector(store=>store.user)
  const {messages} = useSelector(store=>store.message)
    console.log('input sent to',selecteduser)

  const handlesubmit = async(e)=>{
    e.preventDefault();
  try {
    const res =await axios.post(`http://localhost:7000/api/v1/users/sendmessage/${selecteduser._id}`,{ message }, // Request body data
    { headers: { 'Content-Type': 'application/json' }})
    console.log(res.data.data.message,'mesaage from send message server')
    dispatch(setmessages( [...(messages||[]),res?.data?.data.message]));
  setinput('')
  } catch (error) {
    console.log(error)
  }
}
  return (
    <form className='px-4 my-3' onSubmit={handlesubmit}>
        <div className='w-full relative'> 
            <input type="text" value={message} onChange={(e)=>{setinput(e.target.value)}}placeholder='enter your message' className='border p-3 border-zinc-500 text-sm rounded-lg block w-full bg-gray-600 text-white' />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center text-white pr-4'>
            send
        </button>
        </div>
    </form>
  )
}

export default Sendinput