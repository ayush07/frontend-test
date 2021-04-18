import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Post = (post) => {
  const [comments, setComments] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com';
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await axios.get(
        `${url}/comments?postId=${location.state.id}`,
      );

      console.log('COMMENTS===========>>>', comments.data);
      setComments(comments.data);
    };

    fetchComments();
  }, []);
  let location = useLocation();

  console.log(post);
  return (
    <>
      <div>{location.state.title}</div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            {comment.name}
            <br />
            {comment.body}
            <br />
            {comment.email}
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
