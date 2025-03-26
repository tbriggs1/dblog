import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import tom from '../../assets/images/tom.png'

const BlogPreview = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Check out my latest blog</h3>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Row className="g-0 align-items-center">
              <Col md={5}>
                <Card.Img
                  src={tom}
                  alt="Why I Got Into DevOps"
                  className="img-fluid"
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <Card.Title>Why I Got Into DevOps</Card.Title>
                  <Card.Text className="text-muted">
                    A short reflection on what drew me to DevOps — combining development, automation,
                    and infrastructure into one powerful career path.
                  </Card.Text>
                  <Button variant="primary" disabled>
                    Read More (Coming Soon)
                  </Button>
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