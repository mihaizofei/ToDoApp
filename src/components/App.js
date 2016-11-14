// This component handles the App template used on every page.
import React, { PropTypes, Component } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

let isMobile = navigator.userAgent.match(/Android/i);

class App extends Component {
  render() {
    return (
            <div className={isMobile ? 'appMobile' : 'appNormal'}>
                <Header
                    loading={this.props.loading}
                    isMobile={this.props.isMobile}/>
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
    loading: state.ajaxCallsInProgress > 0,
    isMobile: isMobile
  };
}

export default connect(mapStateToProps)(App);
