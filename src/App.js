import './App.css';
import Home from './components/Homepage/Home';
import Bookings from './components/Bookings/BookingPage';
import About from './components/AboutUS/About';
import Payments from './components/PaymentsPage/Payments';
import Nav from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
   
     <Router>
       <Nav/>
      <Switch>
        <route path="/Payments" component={Payments} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>   
    </Router>
   
  );
}

export default App;
