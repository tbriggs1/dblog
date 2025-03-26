import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import bloglogo from '../../assets/images/bloglogo.png'

const services = [
    {
      icon: bloglogo,
      title: 'DevOps Engineering',
      description: 'Automating deployments and managing infrastructure at scale.',
    },
    {
      icon: bloglogo,
      title: 'Cloud Architecture',
      description: 'Designing scalable solutions in AWS.',
    },
    {
      icon: bloglogo,
      title: 'Containerization',
      description: 'Building and managing Dockerized environments.',
    },
    {
      icon: bloglogo,
      title: 'CI/CD Pipelines',
      description: 'Creating automated testing and deployment flows.',
    },
    {
      icon: bloglogo,
      title: 'Scripting & Automation',
      description: 'Writing scripts to automate workflows and processes.',
    },
    {
      icon: bloglogo,
      title: 'Monitoring & Alerting',
      description: 'Setting up metrics, dashboards, and alerts.',
    },
  ];

  const ServiceGrid = () => {
    return (
      <Container className="my-5">
        <div className="bg-white p-5 rounded shadow-sm">
          <h3 className="text-center mb-4">Specialising In</h3>
          <Row className="g-4">
            {services.map((service, idx) => (
              <Col key={idx} md={6}>
                <div className="d-flex align-items-start">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="me-3 mt-1"
                  />
                  <div>
                    <h6 className="mb-1">{service.title}</h6>
                    <p className="text-muted mb-0">{service.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  };
  export default ServiceGrid;

