import axios from 'axios';
import { useEffect, useState } from 'react';
import { Posts } from './components/Posts';
import { Quiero } from './components/Quiero';
import './index.css';

export const BlogApp = () => {

  const [posts, setPosts] = useState([{
    message: 'Comunidad Creada'
  }]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/api/posts');
      setPosts(data);
    }
    fetchPosts();
  }, [])


  return (
    <>
      <Quiero setPosts={setPosts} />

      <Posts posts={posts} />

    </>
  )
}
