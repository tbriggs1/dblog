import axios from 'axios';

export const getBlogPosts = async () => {
  const res = await axios.get('http://217.182.138.224:8000/api/blogposts/');
  return res.data;
};