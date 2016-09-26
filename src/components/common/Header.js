import React, {PropTypes} from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

function handleActive(tab) {
    browserHistory.push(tab.props['data-route']);
}

const Header = () => (
    <MuiThemeProvider>
        <Tabs>
            <Tab label="Items" 
                data-route="/"
                onActive={handleActive}
            />
            <Tab label="Home"
                data-route="/home"
                onActive={handleActive} 
            />
            <Tab label="About"
                data-route="/about"
                onActive={handleActive}
            />
        </Tabs>
    </MuiThemeProvider>
);

export default Header;