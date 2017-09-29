import React, {Component} from 'react';
import MainHeader from './MainHeader';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.props.router.push('/home');
        }, 10000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <div>
                <MainHeader/>
                <p className="about"> This page could contain some useful information.</p>
            </div>
        )
    }
}

export default About;
