import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ItemsPage from './components/item/ItemsPage'; // eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ItemsPage} />
    </Route>
);
