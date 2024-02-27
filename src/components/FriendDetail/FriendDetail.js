import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    // console.log(friend)
    return (
        <div>
            <h1>Friend Detail : {friend.name}</h1>
            <p>Call Him/Her  : {friend.phone}</p>
            <h2>Everything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetail;