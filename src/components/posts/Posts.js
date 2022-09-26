import React, {useEffect, useState} from 'react';

import {useLocation} from "react-router-dom";

import {apiService} from "../../services";

const CommentsDetails = () => {
    const [post, setPost] = useState({title: '', body: ''})
    const location = useLocation()
    useEffect(() => {

        apiService.getPosts(location.state.id + '').then(res => setPost(res.data))

    }, [])

    return (

        <div>

            <h1>Post</h1>

            <h3>{post.title}</h3>

            <p>{post.body}</p>

        </div>




    );

};




export default CommentsDetails;