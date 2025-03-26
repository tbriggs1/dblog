import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h6 className="mb-0">© {new Date().getFullYear()} Tom B</h6>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              📧 <a href="mailto:tom@example.com" className="text-white text-decoration-none">tom@example.com</a> &nbsp; | &nbsp;
              📞 <a href="tel:+441234567890" className="text-white text-decoration-none">+44 1234 567 890</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;