import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Post = (post) => {
  const [comments, setComments] = useState([]);
  let location = useLocation();
  const url = 'https://jsonplaceholder.typicode.com';
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await axios.get(
        `${url}/comments?postId=${location.state.id}`,
      );

      setComments(comments.data);
    };

    fetchComments();
  }, []);

  return (
    <>
      <div className='container mt-5'>
        <div className='float-right'>
          <Link to='/'>Home</Link>
        </div>
        <h1>Post</h1>
        <div className='title'>
          <p>Title : {location.state.title}</p>
        </div>
        <p>Comments :</p>
        {comments.map((comment) => (
          <ul key={comment.id}>
            <li className='comments'>
              <div>{comment.name}</div>
              <div>{comment.body}</div>
              <div>Email : {comment.email}</div>
              <p></p>{' '}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Post;
