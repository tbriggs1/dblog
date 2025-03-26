import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import bloglogo from '../../assets/images/bloglogo.png'

const certifications = [
    {
      logo: bloglogo,
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2024',
      link: 'https://www.credly.com/badges/aws-cert', // optional
    },
    {
      logo: bloglogo,
      title: 'Docker Certified Associate',
      issuer: 'Docker',
      year: '2023',
    },
    {
      logo: bloglogo,
      title: 'Certified Kubernetes Administrator',
      issuer: 'CNCF',
      year: '2023',
    },
    {
      logo: bloglogo,
      title: 'Terraform Associate',
      issuer: 'HashiCorp',
      year: '2023',
    },
    {
      logo: bloglogo,
      title: 'Linux Essentials',
      issuer: 'LPI',
      year: '2022',
    },
    {
      logo: bloglogo,
      title: 'GitHub Actions Bootcamp',
      issuer: 'GitHub',
      year: '2023',
    },
  ];
  


const CertificationGrid = () => {
  return (
    <Container className="my-5">
      <div className="p-5">
        <h3 className="text-center mb-4">Certifications</h3>
        <Row className="g-4">
          {certifications.map((cert, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="border-0 h-100 text-center">
                <Card.Body>
                  <Image
                    src={cert.logo}
                    alt={cert.title}
                    width={60}
                    height={60}
                    className="mb-3"
                  />
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text className="text-muted mb-1">{cert.issuer}</Card.Text>
                  <small className="text-secondary">{cert.year}</small>
                </Card.Body>
                {cert.link && (
                  <Card.Footer className="bg-transparent">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Credential
                    </a>
                  </Card.Footer>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default CertificationGrid;
