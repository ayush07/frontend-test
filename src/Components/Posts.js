import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const Posts = ({ posts, loading, comments, users }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <div className='post' key={post.id}>
          <Link to={{ pathname: `/post/${post.id}`, state: post }}>
            <div>Title : {post.title}</div>
          </Link>

          {users.map((user) => (
            <Link
              key={user.id}
              to={{ pathname: `user/${user.id}`, state: user }}
            >
              {user.id === post.userId ? 'Author : ' + user.username : ''}
            </Link>
          ))}
        </div>
      ))}
    </ul>
  );
};

export default Posts;
