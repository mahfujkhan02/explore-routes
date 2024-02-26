import { fireEvent } from '@testing-library/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData()
    console.log(friends)
    return (
        <div>
            <h2>I have some many friends. Yay : {friends.length}</h2>
            {
                friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
                
                ></Friend>)
            }
        </div>
    );
};

export default Friends;