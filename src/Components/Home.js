import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Autocomplete from 'react-autocomplete';
import Pagination from './Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchValue, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const url = 'https://jsonplaceholder.typicode.com';
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const posts = await axios.get(`${url}/posts`);
      const comments = await axios.get(`${url}/comments`);
      const users = await axios.get(`${url}/users`);

      setPosts(posts.data);
      setComments(comments.data);
      setUsers(users.data);

      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='container mt-5'>
        <h1>Posts</h1>
        <div className='search'>
          <Autocomplete
            items={users}
            shouldItemRender={(item, value) =>
              item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            inputProps={{ placeholder: 'Search' }}
            getItemValue={(item) => item.name}
            renderItem={(item, highlighted) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: highlighted ? '#eee' : 'transparent',
                }}
              >
                {searchValue ? (
                  <Link to={{ pathname: `user/${item.id}`, state: item }}>
                    {item.name}
                  </Link>
                ) : (
                  ''
                )}
              </div>
            )}
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <br />

        <Posts
          posts={currentPosts}
          loading={loading}
          comments={comments}
          users={users}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default App;
