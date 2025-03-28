import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Spinner } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';

function Blog() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`/api/blogposts/${id}/`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <div>
      <NavBar />
      <Container className="py-5">
        <Card className="p-4 shadow-sm">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
              className="mb-4"
            />
          )}
          <h1>{post.title}</h1>
          <p className="text-muted">{post.published}</p>
          <p style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
        </Card>
      </Container>
    </div>
  );
}

export default Blog;
