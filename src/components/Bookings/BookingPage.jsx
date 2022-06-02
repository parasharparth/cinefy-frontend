import React , { useState } from "react";
import TextField from "@material-ui/core/TextField";
import './booking.css'

const Bookings=()=>{
    const [tickets_quantity, setTicketsquantity] = useState("");
    const [total_price, settotalprice] = useState(tickets_quantity*10);
    const [movie_name, movienameoption] = useState("");
    const [theaters_name, theaters] = useState("");
    const [date_time, date] = useState("");

    return(
        <div id="container">
            <div id="form">
                <form id="book_tickets">
                    <fieldset>

                        <legend>Booking Details</legend>

                        <p>
                            <label htmlFor="movie_name">Movie</label>
                            <select id="movie_name" name="movie_name" required autoFocus>
                                <option>Select Movie</option>
                                <option value="Movie 1">Top Gun Maverick</option>
                                <option value="Movie 2">Dob's Burgers Movie</option>
                                <option value="Movie 3">Doctor Strange in the Multiverse Of Madness</option>
                                <option value="Movie 4">Everything Everywhere All at once</option>
                                <option value="Movie 5">The Bad Guys</option>
                                <option value="Movie 6">Secrets of DumbleDore</option>
                                <option value="Movie 7">Watcher</option>
                                <option value="Movie 8">Sonic 2</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="theaters">Theaters</label>
                            <select id="theaters" required>
                                <option>Select Theatre</option>
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
                            <TextField
                             value={total_price}
                             label="Total Price"
                        onChange={(e) => {
                            settotalprice(e.target.value);
        }}
      />

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

export default Bookings;