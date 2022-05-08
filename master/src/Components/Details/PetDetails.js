import React from 'react'
import NavigationBar from '../../Navbar/Navbar'
import './petdetails.css'
import headerimage1 from '../../assets/header1.svg'
import headerimage2 from '../../assets/header2.svg'
import headerimage3 from '../../assets/header3.svg'

const PetDetails = () => {
    return (
        <div>
            <NavigationBar />
            <div class="header-img">
               <img src={headerimage1}/>
               <img src={headerimage2}/>
               <img src={headerimage3}/>
            </div>
            <div class="greet">
                <span class="greet-main">Welcome to PawBuddy!</span>
                <span class="greet-secondary">You're just a few steps away to quick professional health advice for your beloved member of the family</span>
            </div>
            <div class="pet-container">
                <div class="data-fields">
                    <span class="info">Name : XXXX</span>
                    <span class="info" style={{float: "right"}}>Email : XXXX</span><br /><br />
                    <span class="info">Phone : 12345</span>
                    <span class="info" style={{float: "right"}}>
                        <label for="pet">Pet type :</label>
                        <select name="pet" id="pets">
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="rodent">Rodent</option>
                            <option value="bird">Bird</option>
                        </select>
                    </span><br /><br />
                        <span class="info">Symptoms/Problems : &nbsp;<br /><br/> <textarea name="symptoms" cols="50" rows="8" style={{float:"right"}}></textarea>
                        </span>
                </div>
            </div>
            <div class="detailsbutton">
                <button class="btn-style">Chat with Doctor</button>
            </div>

        </div>
    )
}

export default PetDetails