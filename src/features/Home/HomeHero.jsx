import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import tom from '../../assets/images/tom.png';

const HomeHero = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center justify-content-center">
                <Col md={5} className="d-flex justify-content-center">
                    <div className="text-center" style={{ maxWidth: '400px' }}>
                        <h1>Hello I'm Tom</h1>
                        <p>
                            I'm a DevOps engineer specialising in the cloud and AWS.
                        </p>
                    </div>
                </Col>
                <Col md={5} className="d-flex justify-content-center">
                    <Image
                        src={tom}
                        alt="profile"
                        fluid
                        style={{ maxWidth: '250px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HomeHero;