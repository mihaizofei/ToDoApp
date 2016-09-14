// This component handles the App template used on every page.
import React, {PropTypes, Component} from 'react';
import Header from './common/Header';

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;