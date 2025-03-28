import axios from 'axios';

export const getBlogPosts = async () => {
  const res = await axios.get(`/api/blogposts/`);
  return res.data;
};