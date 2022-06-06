import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import './booking.css'
import {MovieContext} from "../../App";
import { useHistory } from "react-router-dom";

const Bookings=()=>{
    const [tickets_quantity, setTicketsQuantity] = useState(0);
    const [total_price, setTotalPrice] = useState(tickets_quantity*10);
    const [movie_name, setMovieName] = useState("");
    const [theaters_name, setTheatre] = useState("");
    const [date_time, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [email, setEmail] = useState("");
    let history = useHistory();
    const movie = useContext(MovieContext);
    const handleSelectMovie = (e) => {
        console.log(e.target.value);
        setMovieName(e.target.value);
    }

    const handleTheatre = (e) => {
        setTheatre(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleTime = (e) => {
        setTime(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleTickets = (e) => {
        setTicketsQuantity(e.target.value);
        setTotalPrice(e.target.value * 10);
    }
    const handleBooking = (e) => {
        e.preventDefault();
        console.log(movie.booking);
        movie.handleBooking({movie: movie_name, theatre: theaters_name, date: date_time,time: Time ,tickets: tickets_quantity, price: total_price})
        history.push('/payment');
    }
    return(
        <div id="container">
            <div id="form">
                <form id="book_tickets" onSubmit={handleBooking}>
                    <fieldset>

                        <legend>Booking Details</legend>

                        <p>
                            <label htmlFor="movie_name">Movie</label>
                            <select id="movie_name" name="movie_name" required autoFocus onChange={handleSelectMovie}>
                                <option>Select Movie</option>
                                <option value="Top Gun Maverick">Top Gun Maverick</option>
                                <option value="The Bob's Burgers Movie">The Bob's Burgers Movie</option>
                                <option value="Doctor Strange in the Multiverse Of Madness">Doctor Strange in the Multiverse Of Madness</option>
                                <option value="Everything Everywhere All at once">Everything Everywhere All at once</option>
                                <option value="The Bad Guys">The Bad Guys</option>
                                <option value="Secrets of DumbleDore">Secrets of DumbleDore</option>
                                <option value="Watcher">Watcher</option>
                                <option value="Sonic 2">Sonic 2</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="theaters">Theaters</label>
                            <select id="theaters" required onChange={handleTheatre}>
                                <option>Select Theatre</option>
                                <option value="Cinemax Cedar Hills">Cinemax Cedar Hills</option>
                                <option value="AMC Progressive ridge">AMC Progressive ridge</option>
                                <option value="Regal theatre Pioneer square">Regal theatre Pioneer square</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="date">Date<br/><span
                                id="dateNote">
                                <a href="https://support.mozilla.org/en-US/questions/986096"></a></span></label>
                            <input type="date" name="date" id="date" min="today" onChange={handleDate} required/>
                        </p>

                        <p>
                            <label htmlFor="Time">Time</label>
                            <select id="Time" required onChange={handleTime}>
                                <option>Select Time</option>
                                <option value="15:00">15:00</option>
                                <option value="19:00">19:00</option>
                                <option value="21:00">21:00</option>
                            </select>
                        </p>

                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={handleEmail} required/>
                        </p>

                        <p>
                            <label htmlFor="tickets_quantity"># Tickets</label>
                            <input type="number" min="1" name="tickets_quantity" id="tickets_quantity" onChange={handleTickets} required/>
                        </p>

                        <p>
                            <label>Total Price</label>
                            <input type="number" disabled value={total_price}/>


                        </p>

                        <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </fieldset>
                </form>
                <p id="perTicketPrice">Per ticket price = $10</p>
            </div>
        </div>
    );

}

export default Bookings;