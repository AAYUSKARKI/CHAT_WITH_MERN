import React, { useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Otherusers from './Otherusers'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { setotheruser } from '../Redux/userslice'

const Sidebar = () => {
  const [search, setsearch] = useState('')
  const {otheruser} = useSelector(store=>store.user);
  const dispatch =useDispatch();

  const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const searchuser = otheruser?.find((user)=>user.fullname.toLowerCase().includes(search.toLowerCase))
        if(searchuser){
dispatch(setotheruser([searchuser]))
        }
        else{
          toast.error('user not found')
        }
    }
    const logouthander =async()=>{
try {
  const res = await axios.post("http://localhost:7000/api/v1/users/logout")
  console.log(res)
  toast.success(res.data.message)
  navigate('/login')
} catch (error) {
  console.log(error)
}
    }
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <form onSubmit={handlesubmit} className='flex items-center gap-2'>
            <input value={search} onChange={(e)=>{setsearch(e.target.value)}} type="text" className='input input-bordered rounded-md' placeholder='serach....' />
            <button type='submit' className='btn  bg-slate-500'><BiSearchAlt2 size='24px'/></button>
        </form>
        <div className='divider px-4'> </div>
<Otherusers/>
       <div className='mt-2'>
        <button className='btn btn-sm' onClick={logouthander}>Logout</button>
       </div>
    </div>
  )
}

export default Sidebar