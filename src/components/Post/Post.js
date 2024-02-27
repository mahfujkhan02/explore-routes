import React from 'react';
import './Post.css'

const Post = ({post}) => {
    const {title , body, userId} = post
    return (
        <div className='post'>
            <p>ID : {userId}</p>
            <p>Title : {title}</p>
            <p>Body : {body}</p>
            <button>Show Details</button>
        </div>
    );
};

export default Post;