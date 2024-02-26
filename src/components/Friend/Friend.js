import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name, email, phone,username} = friend
    return (
        <div className='friend'>
           <h2> Name : {name}</h2>
           <p> Email : {email}
            Phone : {phone}</p>
            <p>Short Name : <Link to={`/friend/${id}`}>{username}</Link></p>
            
        </div>
    );
};

export default Friend;