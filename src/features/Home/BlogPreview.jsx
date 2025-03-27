import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const BlogPreview = ({post}) => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Check out my latest blog</h3>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Row className="g-0 align-items-center">
              <Col md={5}>
                <Card.Img
                  src={post.image}
                  alt="Why I Got Into DevOps"
                  className="img-fluid"
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="text-muted">
                  {post.content.length > 150
                    ? `${post.content.slice(0, 150)}...`
                    : post.content}
                </Card.Text>
                <Link to={`/blog/${post.id}`}>
                <Button variant="primary">
                  Read More
                </Button>
              </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPreview;