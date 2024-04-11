import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { setmessages } from '../Redux/messageslice'
import {useDispatch} from 'react-redux'


const UseGetMessages = () => {

    const {selecteduser} = useSelector(store=>store.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchMessages = async () => {
            try {
                console.log('selected user is',selecteduser)
                if (!selecteduser) return; // Add a null check for selecteduser
                const res = await axios.post(`http://localhost:7000/api/v1/users/getmessage/${selecteduser._id}`);
                console.log(res.data.data.messages,'i am a message')
dispatch(setmessages(res.data.data.messages))
                console.log(res.data,'i am res.data');
            } catch (error) {
                console.log(error);
            }
        };

        fetchMessages();
    }, [selecteduser]);
}

export default UseGetMessages