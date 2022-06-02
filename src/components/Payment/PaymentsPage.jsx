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
                            <div style={{background:'white',fontSize:'20px'}}>Your total is for $$</div>
                        </p>
                        <p>
                            <div style={{background:'white',fontSize:'20px'}}>Payment options</div>
                        </p>
                        <p>
                            <div style={{background:'white'}}> Credit / Debit card</div>

                        </p>

                        <p>
                            <div style={{fontSize:'20px', color:'darkolivegreen'}}>Enter your card details</div>

                            <label style={{fontSize:'20px'}} htmlFor="Card number">Card number</label>
                            <input style={{fontSize:'20px'}}type="contact number" name="Card number" id="Card number" required placeholder="xxxx xxxx xxxx xxxx"/>

                            <label style={{fontSize:'20px'}} htmlFor="Name on Card">Name on Card</label>
                            <input style={{fontSize:'20px'}} type="Name on Card" name="Name on Card" id="Name on Card" required placeholder="First and Last Name"/>

                            <label style={{fontSize:'20px'}} htmlFor="Expiry Month">Expiry Month</label>
                            <input style={{fontSize:'20px'}}type="Expiry Month" name="Expiry Month" id="Expiry Month" required placeholder="MM"/>

                            <label style={{fontSize:'20px'}} htmlFor="Expiry Year">Expiry Year</label>
                            <input style={{fontSize:'20px'}}type="Expiry Year" name="Expiry Year" id="Expiry Year" required placeholder="YY"/>

                            <label style={{fontSize:'20px'}} htmlFor="CVV">CVV</label>
                            <input style={{fontSize:'20px'}} type="CVV" name="contact number" id="CVV" required placeholder="xxx"/>
                        </p>
                        <legend>Customer Details</legend>
                        <p>
                            <label style={{fontSize:'20px'}} htmlFor="contact number">contact number</label>
                            <input style={{fontSize:'20px'}} type="contact number" name="contact number" id="contact number" required/>

                            <label style={{fontSize:'20px'}} htmlFor="Address">Address</label>
                            <input style={{fontSize:'20px',height:'100px'}} type="Address" name="Address" id="Address" required/>
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
