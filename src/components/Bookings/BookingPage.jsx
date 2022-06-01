import React from "react"
import './booking.css'
const Bookings=()=>{

    return(
        <div id="container">
            <div id="form">
                <form id="book_tickets">
                    <fieldset>

                        <legend>Booking Details</legend>

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
                            <label htmlFor="theaters">Theaters</label>
                            <select id="theaters" required>
                                <option></option>
                                <option value="Theater 1">Cinemax Cedar Hills</option>
                                <option value="Theater 2">AMC Progressive ridge</option>
                                <option value="Theater 3">Regal theatre Pioneer square</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="date">Date<br/><span
                                id="dateNote"> 
                                <a href="https://support.mozilla.org/en-US/questions/986096"></a></span></label>
                            <input type="date" name="date" id="date" min="today" required/>
                        </p>

                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required/>
                        </p>

                        <p>
                            <label htmlFor="tickets_quantity"># Tickets</label>
                            <input type="number" min="1" name="tickets_quantity" id="tickets_quantity" required/>
                        </p>

                        <p>
                            <label>Total Price</label>
                            <span id="total_price">(enter data first)</span>
                        </p>
                        <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </fieldset>
                </form>
                <p id="perTicketPrice">Per ticket price = $10</p>
            </div>
        </div>
    )

};

export default Bookings;