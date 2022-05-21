import './App.css';
import Home from './components/Homepage/Home';
import Bookings from './components/Bookings/BookingPage';
import About from './components/AboutUS/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
     <Router>
       <Header/>
      <About />
      <Footer/>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/aboutUS" component={About} />
        <Route path="/home" component={Home} />
      </Routes>   
    </Router>
    </div>

  );
}

export default App;
