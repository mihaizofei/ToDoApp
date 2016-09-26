import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ItemsPage from './components/item/ItemsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ItemsPage} />
        <Route path="home" component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);