import React, { useEffect, useState } from "react"

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
     
        <div>
            <p>CINEFY</p>
          {movies.map(movie => (
            <p key={movie.movieId}>{movie.movieName}</p>
          ))}
        </div>
      
    </div>
  )
}

export default Home;