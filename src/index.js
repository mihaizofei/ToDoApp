import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

/*eslint-disable no-console */
console.log('debugger 2');

injectTapEventPlugin();

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);