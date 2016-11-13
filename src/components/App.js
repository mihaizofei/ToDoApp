// This component handles the App template used on every page.
import React, { PropTypes, Component } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

let isAndroid = navigator.userAgent.match(/Android/i);

class App extends Component {
  render() {
    return (
            <div className={isAndroid ? 'appMobile' : 'appNormal'}>
                <Header
                    loading={this.props.loading}/>
                {this.props.children}
            </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
