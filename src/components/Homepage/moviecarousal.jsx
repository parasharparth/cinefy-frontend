import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const MovieCarousel = ({ movies }) => {

    const responsive = {
        LargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 2800, min: 1000 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 900, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div style={{ width: "70%", margin: "auto" }}>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                {
                    movies?.map(movie => (
                        <Card {...movie} key={movie._id} />
                    ))
                }
            </Carousel>
        </div >
    )
}