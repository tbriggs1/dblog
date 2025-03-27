import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom'; // ✅ Add this

function BlogList({ blogPosts }) {
  if (!blogPosts || blogPosts.length === 0) {
    return <p>Loading...</p>;
  }

  const latestPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const truncateText = (text, limit = 150) =>
    text.length > limit ? text.slice(0, limit) + '...' : text;

  return (
    <div>
      <NavBar />
      <Container className="py-4">
        <h2 className="mb-4">Latest Blog</h2>
        <Card className="mb-5 shadow-sm bg-white">
          <Row className="g-0">
            <Col md={4}>
              {latestPost.image && (
                <Card.Img
                  src={latestPost.image}
                  alt={latestPost.title}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              )}
            </Col>
            <Col md={8}>
              <Card.Body className="d-flex flex-column h-100">
                <Card.Title>{latestPost.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {truncateText(latestPost.content, 1000)}
                </Card.Text>
                <Link to={`/blog/${latestPost.id}`}>
                  <Button variant="primary" className="mt-auto align-self-start">
                    Read More
                  </Button>
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <h2 className="mb-4">All Blogs</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {otherPosts.map((post) => (
            <Col key={post.id}>
              <Card className="h-100 bg-white shadow-sm">
                {post.image && (
                  <Card.Img
                    variant="top"
                    src={post.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {truncateText(post.content)}
                  </Card.Text>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="primary" className="mt-auto">
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BlogList;
