import React from 'react'
import NavigationBar from '../Navbar/Navbar'
import homeImage from '../assets/Home.svg'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div class="section">
        <div class="home-container">
          <div class="content-section">
            <div class="title">
              <h1>About Us</h1>
            </div>
            <div class="content">
              <h3>Pawbuddy at your pet service</h3>
              <p>The circumstance that motivated us to create PawBuddy was that, there is lack of any proper interface/media for easy access to healthcare professionals for pet owners.
                PawBuddy mainly aims to connect such owners to get easy, quick health advice for their pets from trained professionals. </p>
              <div class="button-home">
                <Link to="/options">Get Started</Link>
              </div>
            </div>
            <div class="social">
              <a href=""><i class="fab fa-facebook-f"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div class="image-section">
            <img src={homeImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home