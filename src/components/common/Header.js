import React, { PropTypes } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import LoadingDots from './LoadingDots';

const styles = {
  tab: {
    height: 150,
    fontSize: 60
  }
};

function handleActive(tab) {
  browserHistory.push(tab.props['data-route']);
}

const Header = ({ loading, isMobile }) =>
    <div>
        <MuiThemeProvider>
            <Tabs>
                <Tab label="Items"
                    data-route="/"
                    onActive={handleActive}
                    style={isMobile ? styles.tab : {}}
                />
                <Tab label="Admin"
                    data-route="/admin"
                    onActive={handleActive}
                    style={isMobile ? styles.tab : {}}
                />
            </Tabs>
        </MuiThemeProvider>
        {loading && <LoadingDots interval={100} dots={20}/>}
    </div>
;

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default Header;
