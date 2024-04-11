import React, { useEffect } from 'react';
import Otheruser from './Otheruser';
import useGetOtherUsers from '../Hooks/UseGetOtherUsers';
import { useSelector } from 'react-redux';

const Otherusers = () => {
    const { otheruser } = useSelector(store => store.user);

    // Call the custom hook within the functional component
    useGetOtherUsers();

    // Render the Otheruser components based on the otheruser data
    return (
        <>
            <div className='overflow-auto flex-1'>
                {otheruser?.map(user => (
                    <Otheruser key={user._id} user={user} />
                ))}
            </div>
        </>
    );
}

export default Otherusers;
