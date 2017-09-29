import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieThumbnail from './MovieThumbnail';
import Input from './Input';

class MovieList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: null
        };

        this.filterItems = this.filterItems.bind(this);
    }

    filterItems(filter) {
        this.setState({filter: filter});
    }

    renderItems(movies) {
        let items = [];
        let filter = this.state.filter;

        if (filter) {
            filter = filter.toLocaleLowerCase();
        }

        for (let i = 0; i < movies.length; i++) {
            const m = movies[i];

            if (!filter || m.title.toLocaleLowerCase().indexOf(filter) >= 0) {
                items.push(<MovieThumbnail movie={ m }/>);
            }
        }

        return items;
    }

    render() {
        return (
            <div className="leftPart">
                <div className="FieldSortSearch">
                    <p>Sort movies</p>
                    <div>
                        <div className="sortByLikies">
                            <small> by likies</small>
                        </div>
                        <div className="sortByRating">
                            <small> by rating</small>
                        </div>
                    </div>
                    <Input onFilter={this.filterItems}/>
                </div>

                { this.renderItems(this.props.movies) }
            </div>);
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default  MovieList;

