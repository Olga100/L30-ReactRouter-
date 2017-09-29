import React, {Component} from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import MainHeader from './MainHeader';
import movies from './movies.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.getCurrentMovie = this.getCurrentMovie.bind(this);
    }

    getCurrentMovie() {
        let currentMovieId = this.props.params.id;
        let currentMovie;

        if (currentMovieId) {
            currentMovie = movies.movies.filter(m => m.id == currentMovieId)[0];
        }

        if (!currentMovie) {
            currentMovie = movies.movies[0];
        }

        return currentMovie;
    }

    render() {
        return (
            <div className="App">

                <MainHeader/>

                <div className="header"><h2>Movies</h2></div>

                <div id="movie-list-container">
                    <MovieList movies={movies.movies}/>
                </div>

                <div id="movie-details-container">
                    <MovieDetails movie={this.getCurrentMovie()}/>
                </div>

                <div className="clear"></div>

                <div className="footer"><h2> EPAM</h2></div>
            </div>

        );
    }
}

export default App;



