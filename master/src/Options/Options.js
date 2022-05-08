import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NavigationBar from '../Navbar/Navbar'
import './options.css'
import petimage from '../assets/petoption.svg'
import docimage from '../assets/docotion.svg'
import { Link } from 'react-router-dom'

const Options = () => {
    return (
        <div className='options'>
            <NavigationBar />
            <div className='options-section'>
                <Container className='options-container'>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={docimage} />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Hello Doctors</Card.Title>
                                    <Card.Text>
                                        This part is for Doctors. Welcome to our team and thank you for choosing us 🧑🏻‍⚕️
                                    </Card.Text>
                                </Card.Body>

                                <Card.Body style={{ textAlign: "center" }}>
                                    <Link to="/signUpDoctor"> <button className='doctor-option'>For Doctors</button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={petimage} />
                                <Card.Body style={{ textAlign: "center" }}>
                                    <Card.Title>Hello Patient</Card.Title>
                                    <Card.Text>
                                        This part is for Patients. Welcome patient and thank you for choosing us 🐶
                                    </Card.Text>
                                </Card.Body>

                                <Card.Body style={{ textAlign: "center" }}>
                                    <Link to="/signUp"> <button className='patient-option'>For Patients</button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Options