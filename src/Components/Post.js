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
          <>
            <span>
              {comment.name}
              <br />
            </span>
            <span>{comment.body}</span>
            <br />
            <span>{comment.email}</span>
            <br />
            <br />
          </>
        ))}
      </div>
    </>
  );
};

export default Post;
