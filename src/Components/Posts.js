import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const Posts = ({ posts, loading, comments, users }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <div key={post.id}>
          <span>
            <Link to={{ pathname: `/post/${post.id}`, state: post }}>
              Title : {post.title}
            </Link>
            <br />
            {users.map((user) => (
              <Link
                key={user.id}
                to={{ pathname: `user/${user.id}`, state: user }}
              >
                {user.id === post.userId ? 'Author : ' + user.username : ''}
              </Link>
            ))}
          </span>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
