import React from 'react'
import NavigationBar from '../Navbar/Navbar'
import './payment.css'

const Payment = () => {
    return (
        <div>
            <NavigationBar />
            <div className='payment'>
                <div class="payment-container">
                    <h1>Confirm Your Pawbuddy Payment</h1>
                    <div class="first-row">
                        <div class="owner">
                            <h3>Name on card</h3>
                            <div class="input-payment">
                                <input type="text" />
                            </div>
                        </div>
                        <div class="cvv">
                            <h3>CVV</h3>
                            <div class="input-payment">
                                <input type="password" />
                            </div>
                        </div>
                    </div>
                    <div class="second-row">
                        <div class="card-number">
                            <h3>Card Number</h3>
                            <div class="input-payment">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="third-row">
                        <h3>Expiry date</h3>
                        <div class="selection">
                            <div class="date">
                                <select name="months" id="months">
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="Sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dec">Dec</option>
                                </select>
                                <select name="years" id="years">
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                </select>
                            </div>
                            <div class="cards">
                                <img src={require('../assets/mc.png')} alt="" />
                                <img src={require('../assets/vi.png')} alt="" />
                                <img src={require('../assets/pp.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <a href="">Confirm</a>
                </div>
            </div>
        </div>

    )
}

export default Payment