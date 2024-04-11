import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { setselecteduser } from '../Redux/userslice';

const Otheruser = (props) => {
    
    const user = props.user;
    const dispatch = useDispatch();
const {selecteduser} = useSelector(store=>store.user);
    const SelectedUserHandler = (user)=>{
        console.log(user)
        dispatch(setselecteduser(user))

            }
  return (
    <>
         
                <div onClick={()=>SelectedUserHandler(user)} className={` ${selecteduser?._id === user?._id ? 'bg-slate-200':''} flex gap-2 items-center rounded-sm cursor-pointer hover:bg-zinc-200`}>
                    <div className='avatar online'>
                        <div className='w-11 rounded-full '>
                            <img src={user?.profilePhoto}/>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='flex gap-2 justify-between'>
                            <p>{user?.fullname}</p>
                </div>
            </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Otheruser