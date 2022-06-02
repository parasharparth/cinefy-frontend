import React from "react"
import './payment.css'
const Payment=()=>{

    return(
        <div id="container">
            <div id="form">
                <form id="Payment">
                    <fieldset>

                        <legend>Payments_Page</legend>

                    
                        <p>
                            <div style={{background:'black',fontSize:'20px', color:'white'}}>Total amount is: 10$</div>
                        </p>
                        <p>
                            <div style={{background:'grey',fontSize:'20px', color:'white'}}>Payment options</div>
                        </p>
                        <p>
                            <div style={{background:'grey', fontSize:'20px', color:'white'}}> Credit / Debit card</div>

                        </p>

                        <p>
                            {/* <div style={{fontSize:'20px', color:'darkolivegreen'}}>Enter your card details</div> */}

                            <label style={{fontSize:'20px'}} htmlFor="Card number">Card number</label>
                            <input style={{fontSize:'17px'}}type="contact number" name="Card number" id="Card number" required placeholder="xxxx xxxx xxxx xxxx"/>

                            <label style={{fontSize:'20px'}} htmlFor="Name on Card">Name on Card</label>
                            <input style={{fontSize:'17px'}} type="Name on Card" name="Name on Card" id="Name on Card" required placeholder="First and Last Name"/>

                            <label style={{fontSize:'20px'}} htmlFor="Expiry Month">Expiry Month</label>
                            <input style={{fontSize:'17px'}}type="Expiry Month" name="Expiry Month" id="Expiry Month" required placeholder="MM"/>

                            <label style={{fontSize:'20px'}} htmlFor="Expiry Year">Expiry Year</label>
                            <input style={{fontSize:'17px'}}type="Expiry Year" name="Expiry Year" id="Expiry Year" required placeholder="YY"/>

                            <label style={{fontSize:'20px'}} htmlFor="CVV">CVV</label>
                            <input style={{fontSize:'17px'}} type="CVV" name="contact number" id="CVV" required placeholder="xxx"/>
                        </p>
                        <legend>Customer Details</legend>
                        <p>
                            <label style={{fontSize:'20px'}} htmlFor="contact number">Contact Number</label>
                            <input style={{fontSize:'17px'}} type="contact number" name="contact number" id="contact number" required/>

                            <label style={{fontSize:'20px'}} htmlFor="Address">Address</label>
                            <input style={{fontSize:'17px',height:'100px'}} type="Address" name="Address" id="Address" required/>
                        </p>

                        <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Confirm payment"/>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
};
export default Payment;