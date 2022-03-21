import React from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';

const Home = () => {
    return (
        
        <>
            <HeroSlide/>

            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2" >
                        <h2>Popular Movies</h2>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/><br/>
                    <div className='button_section' style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                </div>
            
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                    </div>
                    <MovieList category={category.movie} type={movieType.now_playing}/><br/>
                    <div className='button_section' style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2" >
                        <h2>Upcoming Movies</h2>
                    </div>
                    <MovieList category={category.movie} type={movieType.upcoming} slice={40}/><br/>
                    <div className='button_section' style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/><br/>
                    <div className='button_section' style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Popular Tv Shows</h2>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/><br/>
                    <div className='button_section' style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Tv Shows</h2>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/><br/>
                    <div className='button_section' style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2" >
                        <h2>Tranding Tv Shows</h2>
                    </div>
                    <MovieList category={category.tv} type={tvType.on_the_air}/><br/>
                    <div className='button_section' style={{display: 'flex', justifyContent: 'center'}}>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;