import React, {PropTypes} from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import LoadingDots from './LoadingDots';

function handleActive(tab) {
    browserHistory.push(tab.props['data-route']);
}

const Header = ({loading}) => (
    <div>
        <MuiThemeProvider>
            <Tabs>
                <Tab label="Items" 
                    data-route="/"
                    onActive={handleActive}
                />
                <Tab label="Admin"
                    data-route="/admin"
                    onActive={handleActive} 
                />
            </Tabs>
        </MuiThemeProvider>
        {loading && <LoadingDots interval={100} dots={20}/>}
    </div>
);

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;