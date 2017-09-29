import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';

class MovieThumbnail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {movie} = this.props;

        return (
            <div className="movie-thumbnail-title">

                <Link className="navLink" to={"movies/" + movie.id } activeClassName="active">

                    <div className="title">
                        <small>{ movie.title }</small>
                    </div>
                    <div className="likes">
                        <span className="thumb"> <i className="fa fa-thumbs-o-up" aria-hidden="true"/></span>
                        <span className="thumb"> <i className="fa fa-thumbs-o-down" aria-hidden="true"/></span>
                        <small>likes</small>
                        <hr/>
                        <small>{movie.likes}</small>
                    </div>
                    <img className="image" src={movie.posterUrl} alt="poster"/>
                    <div className="clear"></div>
                    <div className="stars"><Stars stars={movie.stars}/></div>

                </Link>

            </div>);
    }
}

MovieThumbnail.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MovieThumbnail;

