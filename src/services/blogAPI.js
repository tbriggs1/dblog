import axios from 'axios';

export const getBlogPosts = async () => {
  const res = await axios.get('localhost:8000/api/blogposts/');
  return res.data;
};