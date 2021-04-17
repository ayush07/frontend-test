import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const Posts = ({ posts, loading, comments, users }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <>
          <div key={post.id}>
            <span>
              <Link to={{ pathname: `/post/${post.id}`, state: post }}>
                {post.title}
              </Link>
              <h1>
                {users.map((user) => (
                  <Link to={{ pathname: `user/${user.id}`, state: user }}>
                    {user.id === post.userId ? user.username : ''}
                  </Link>
                ))}
              </h1>
            </span>
          </div>

          <br />
        </>
      ))}
    </ul>
  );
};

export default Posts;
