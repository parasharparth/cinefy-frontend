import React, { useEffect, useState } from "react"
import './Home.css';
import img1 from "./MovieImg/1.jpg"
import img2 from "./MovieImg/m2.jpeg"
import img3 from "./MovieImg/m3.jpeg"
import img4 from "./MovieImg/m4.jpeg"
import img5 from "./MovieImg/m5.jpeg"
import img6 from "./MovieImg/m6.jpeg"

const Home = () => {
  const [movies, setMovies] = useState([])

  const fetchData = () => {
    fetch("http://localhost:8080/cinefy/movies")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setMovies(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>   
       
        {/* <div>
            <p id="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Add home page content here</p>
          {movies.map(movie => (
            <p key={movie.movieId}>{movie.movieName}</p>
          ))}
        </div> */}
        <div class="container">
            <div class="gallery">
                <figure class="gallery__item gallery__item--1">
                    <img src={img1} alt="Gallery image 1" class="gallery__img"/>
                    <p>
                    <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src={img2} alt="Gallery image 2" class="gallery__img"/>
                    <p>
                    <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src={img3} alt="Gallery image 3" class="gallery__img"/>
                    <p>
                    <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src={img4} alt="Gallery image 4" class="gallery__img"/>
                    <p>
                    <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src={img5} alt="Gallery image 5" class="gallery__img"/>
                    <p>
                    <div id="submit_wrapper">
                            <input type="submit" id="submit" value="Book Tickets"/>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src={img6} alt="Gallery image 6" class="gallery__img"/>
                    <p>
                    <label htmlFor="movie_name">Movie (Data from DB)</label>
                    </p>
                  
                </figure>
            </div>
        </div>
      
    </div>
  )
}

export default Home;