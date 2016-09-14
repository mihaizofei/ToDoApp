import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePage extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>To do list</h1>
                    <p>To do list in ES6</p>
                    <FlatButton label="Ok" primary/>
                    <Link to="about">Learn more</Link>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;