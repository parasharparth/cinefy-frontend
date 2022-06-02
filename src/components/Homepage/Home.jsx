import React, { useEffect, useState } from "react"
import './Home.css';
import img1 from "./MovieImg/1.jpg"
import img2 from "./MovieImg/m2.jpeg"
import img3 from "./MovieImg/m3.jpeg"
import img4 from "./MovieImg/m4.jpeg"
import img5 from "./MovieImg/m5.jpeg"
import img6 from "./MovieImg/m6.jpeg"
import img7 from "./MovieImg/m7.jpeg"
import img8 from "./MovieImg/m8.jpeg"
import { Link } from "react-router-dom";

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
        <div class="container">
            <div class="gallery">
              
                <figure class="gallery__item gallery__item--1">
                    <img src={img1} alt="Gallery image 1" class="gallery__img"/>
                    <p id="test">{movies[0].movieName} IMDB {movies[0].movieRating}</p>
                    <p id="test">IMDb {movies[0].movieRating}/10</p>
                    <p>
                    <div id="submit_wrapper">
                    <Link to="/bookings">
                    <a
                id="bookings"
                class="active"
                href="/bookings"
                data-after="bookings">
                            <input type="submit" id="submit" value="Book"/>
                            </a>
                            </Link>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src={img2} alt="Gallery image 2" class="gallery__img"/>
                    <p id="test">{movies[1].movieName}</p>
                    <p id="test">IMDb {movies[1].movieRating}/10</p>

                    <p>
                    <div id="submit_wrapper">
                    <Link to="/bookings">
                    <a
                id="bookings"
                class="active"
                href="/bookings"
                data-after="bookings"
              >
                            <input type="submit" id="submit" value="Book"/>
                            </a>
                            </Link>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src={img3} alt="Gallery image 3" class="gallery__img"/>
                    <p id="test">{movies[2].movieName}</p>
                    <p id="test">IMDb {movies[2].movieRating}/10</p>
                    <p>
                    <div id="submit_wrapper">
                    <Link to="/bookings">
                    <a
                id="bookings"
                class="active"
                href="/bookings"
                data-after="bookings"
              >
                            <input type="submit" id="submit" value="Book"/>
                            </a>
                            </Link>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src={img4} alt="Gallery image 4" class="gallery__img"/>
                    <p id="test">{movies[3].movieName}</p>
                    <p id="test">IMDb {movies[3].movieRating}/10</p>
                    <p>
                    <div id="submit_wrapper">
                    <Link to="/bookings">
                    <a
                id="bookings"
                class="active"
                href="/bookings"
                data-after="bookings"
              >
                            <input type="submit" id="submit" value="Book"/>
                            </a>
                            </Link>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src={img5} alt="Gallery image 5" class="gallery__img"/>
                    <p id="test">{movies[4].movieName}</p>
                    <p id="test">IMDb {movies[4].movieRating}/10</p>
                    <p>
                    <div id="submit_wrapper">
                    <Link to="/bookings">
                    <a
                id="bookings"
                class="active"
                href="/bookings"
                data-after="bookings"
              >
                            <input type="submit" id="submit" value="Book"/>
                            </a>
                            </Link>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--6">
                    <img src={img6} alt="Gallery image 6" class="gallery__img"/>
                    <p id="test">{movies[7].movieName}</p>
                    <p id="test">IMDb {movies[7].movieRating}/10</p>
                    <p>
                    <input type="submit" id="submit" value="Book"/>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--7">
                    <img src={img7} alt="Gallery image 7" class="gallery__img"/>
                    <p id="test">{movies[6].movieName}</p>
                    <p id="test">IMDb {movies[6].movieRating}/10</p>
                    <p>
                    <div id="submit_wrapper">
                    <Link to="/bookings">
                    <a
                id="bookings"
                class="active"
                href="/bookings"
                data-after="bookings"
              >
                            <input type="submit" id="submit" value="Book"/>
                            </a>
                            </Link>
                        </div>
                    </p>
                  
                </figure>
                <figure class="gallery__item gallery__item--8">
                    <img src={img8} alt="Gallery image 8" class="gallery__img"/>
                    <p id="test">{movies[5].movieName}</p>
                    <p id="test">IMDb {movies[5].movieRating}/10</p>
                    <p>
                    <div id="submit_wrapper">
                    <Link to="/bookings">
                    <a
                id="bookings"
                class="active"
                href="/bookings"
                data-after="bookings"
              >
                            <input type="submit" id="submit" value="Book Tickets"/>
                            </a>
                            </Link>
                        </div>
                    </p>
                  
                </figure>
            </div>
        </div>

      
    </div>
  )
}

export default Home;