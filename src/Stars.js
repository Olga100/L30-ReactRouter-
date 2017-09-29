import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Stars extends React.Component {
    render() {
        let starsString = "";
        for (let i = 0; i < 5; i++) {
            if (i < this.props.stars) {
                starsString += String.fromCharCode(0x2605);
            }
            else {
                starsString += String.fromCharCode(0x2606);
            }
        }

        return <div>{starsString}</div>;
    }
}

Stars.propTypes = {
    stars: PropTypes.number.isRequired
};

export default Stars;