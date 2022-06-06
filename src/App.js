import './App.css';
import Home from './components/Homepage/Home';
import Bookings from './components/Bookings/BookingPage';
import About from './components/AboutUS/About';
import { useState, createContext } from "react";

import Nav from './components/Header';
import Footer from './components/Footer';
import Payment from './components/Payment/PaymentsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const MovieContext  = createContext();
function App() {
    const [booking, setBooking] = useState({movie: "", theatre:"", date:"", Time:"", email:"", tickets:"", price:""});

    const handleBooking = (booking) => {
        setBooking(booking)
    }
    return (
        <MovieContext.Provider value={{handleBooking, booking}}>
            <Router>
                <Nav/>
                <Switch>

                    <Route path="/bookings" component={Bookings} />
                    <Route path="/about" component={About} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </MovieContext.Provider>
    );
}

export default App;
