import React from "react"
import './payment.css'
const Payment=()=>{

    return(
        <div id="container">
            <div id="form">
                <form id="book_tickets">
                    <fieldset>

                        <legend>Payments</legend>

                        <p>
                            <label htmlFor="movie_name">Movie</label>
                            <select id="movie_name" name="movie_name" required autoFocus>
                                <option></option>
                                <option value="Movie 1">Thor</option>
                                <option value="Movie 2">Black</option>
                                <option value="Movie 3">83</option>
                            </select>
                        </p>

                        <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </fieldset>
                </form>
                <p id="perTicketPrice">Per ticket price = $10</p>
                {/* <p id="discount">
                    <span id="disount_title">Discounts:</span>
                    <ul>
                        <li>5% discount if show is on weekday</li>
                        <li>10% discount if number of tickets >= 10</li>
                    </ul>
                </p> */}
            </div>
        </div>
    );

}

export default Payment;