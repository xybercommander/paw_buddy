import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import './navbar.css'
import logo from '../assets/Pawwwblack.png'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div className='nav-bar'>
            <Navbar>
                <Container>
                    <Navbar.Brand className='heading'>
                        <Link to="/">Paw Buddy</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='img-logo'>
                            <img src={logo} className="logo" />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar