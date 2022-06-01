import React from "react"

const Payment=()=>{

    return(
        <div id="container">
            <div id="form">
                <form id="Payment">
                    <fieldset>

                        <legend>Payments_Page</legend>

                        <p>
                            <label htmlFor="movie_name">Movie</label>
                            <select id="movie_name" name="movie_name" required autoFocus>
                                <option></option>
                                <option value="Movie 1">Thor</option>
                                <option value="Movie 2">Black</option>
                                <option value="Movie 3">83</option>
                            </select>
                        </p>
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
                                    <div style={{fontSize:'20px', color:'darkolivegreen'}}>Card Number</div>
                                    <input type="text" placeholder="Enter Your Card Number" value="xxxx xxxx xxxx xxxx"/>
                                    <input type="text" placeholder="Name on the card" value="First and Last Name" />
                            <div>
                                <div style={{fontSize:'20px', color:'darkolivegreen'}}>Expiry</div>
                                <div style={{display:'flex'}}>
                                    <input type="text" placeholder="MM" value="06"/>
                                    <input type="text" placeholder="YY" value="23"/>
                                </div>
                            </div>

                            <div>
                                <div style={{fontSize:'20px', color:'darkolivegreen'}}>CVV</div>
                                <div>
                                    < input style={{width:"50px",textAlign:'center',}} type="text" placeholder="CVV"  value="933"/>
                                </div>
                            </div>
                        </p>
                        <legend>Customer Details</legend>
                        <p>
                            <label htmlFor="contact number">contact number</label>
                            <input type="contact number" name="contact number" id="contact number" required/>
                            <label htmlFor="Address">Address</label>
                            <input type="Address" name="Address" id="Address" required/>

                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
            )
            };
export default Payment;