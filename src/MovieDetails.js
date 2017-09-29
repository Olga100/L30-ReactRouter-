import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

class MovieDetails extends React.Component {

    render() {
        const {movie} = this.props;             //Здесь что ли меняется на const{movie}= this.state или store.getState();

        return (
            <div>
                <div id="movie-details-left">
                    {movie.title}<br />
                    Likes: {movie.likes}<br />
                    <Stars stars={movie.stars}/>
                </div>
                <div id="movie-details-right">
                    <div className="center-container">
                        <img src={movie.posterUrl}/>
                    </div>
                    <div><b>Director:</b> {movie.director} </div>
                    <div><b>Actors:</b> {movie.actors.join(", ")} </div>
                    <div><b>Genres:</b> {movie.genres.join(", ")} </div>
                    <div><b>Description:</b> {movie.description} </div>
                </div>
            </div>
        );
    }
}

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired
};

export default  MovieDetails;
