import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound';


ReactDOM.render(
    <Router history={hashHistory}>
        <IndexRoute component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="/movies" component={App}>
            <Route path=":id" component={App}/>
        </Route>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="*" component={PageNotFound}/>
    </Router>
    , document.getElementById('root'));


registerServiceWorker();


