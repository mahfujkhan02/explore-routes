import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id , title , body} = post
    const navigate = useNavigate()
    const handleNavigate = () =>{

        navigate(`/post/${id}`)

    }
    return (
        <div className='post'>
            
            <p>Title : {title}</p>
            <p>Body : {body}</p>
            <Link to={`/post/${id}`}>visit : {id}</Link>
            <Link to={`/post/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details 2</button>
        </div>
    );
};

export default Post;