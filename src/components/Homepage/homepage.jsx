import React, { Component } from 'react'

class homepage extends Component{
    contructor(props){
        super(props)

        this.state = {
                movies: []
        }
    }

    //Adding all the events and features to be included on the home page
    //We will make use of the carousel to beautify the page so that the movie and event lists are displayed properly
    //The features to be added are: - recommended movies, entertainment, premier movies, outdoorevents, laughter events, popular events, latest events
    render(){
        return (
            <div style={{ backgroundColor: "#F2F5F9" }}>
            <AddCarousel />
            <RecommendedMovies />
            <Entertainment />
            <PremierMovies />
            <OutdoorEvents />
            <div style={{ backgroundColor: "#F2F2F2" }}>
                <LaughterEvents />
                <PopularEvents />
                <LatestEvents />
            </div>
        </div>
        )
    }
}

export default homepage