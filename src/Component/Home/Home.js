import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'recharts';
import BeerReviews from '../BeersReviews/BeerReviews';
import useBeer from '../Hook/useBeer';
import './Home.css'
const Home = () => {
    const [beer, setBeers] = useBeer()
    const beers = beer.slice(0,3)
    console.log(beers)
    return (
        <div>

            <div className='banner'>
                <div className='banner-info'>
                    <h1>Explore Your Favourite Bike</h1>
                    <p>Welcome to Bike-Booster House, Britain’s biggest online Bike shop. Choose from 1,700 of the world’s most attarctive Bike . Get it all delivered straight to your door with zero fuss, at prices you won’t find anywhere else.</p>
                    <button class="btn btn-outline-primary border-2">Live Demo</button>
                </div>
                <div >
                    <img className='banner-img' src="https://i.pinimg.com/564x/da/ae/de/daaedeed9dea808962cf995ba0a6a6ff.jpg" alt="" />
                </div>
            </div>


            <div className='review-container'>

                {
                    beers.map(beer => <BeerReviews
                        key={beer.id}
                        beer={beer}
                    ></BeerReviews>
                    )
                }

                <Link className='see-all-btn' to='/review'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;