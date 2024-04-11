import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setotheruser } from '../Redux/userslice';
import toast from 'react-hot-toast';

// UseGetOtherUsers is a custom hook
const useGetOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchotherUsers = async () => {
            try {
                const res = await axios.get("http://localhost:7000/api/v1/users/getotheruser");
                dispatch(setotheruser(res.data.data));
                toast.success(res.data.message);
            } catch (error) {
                console.log(error);
            }
        };

        fetchotherUsers();
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
}

export default useGetOtherUsers;
