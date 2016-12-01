import React, { PropTypes } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import LinearProgress from 'material-ui/LinearProgress';

const styles = {
  tab: {
    height: 100,
    fontSize: 40
  }
};

function handleActive(tab) {
  browserHistory.push(tab.props['data-route']);
}

const Header = ({ loading, isMobile }) =>
    <div>
        <MuiThemeProvider>
            <div>
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
                <br/>
                {loading && <LinearProgress mode="indeterminate" />}
            </div>
        </MuiThemeProvider>
    </div>
;

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default Header;
