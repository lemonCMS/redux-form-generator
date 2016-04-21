import React, {Component, PropTypes} from 'react';
import {PropTypes as historyPropTypes} from 'react-router';

class App extends Component {

  render() {
    return (
        this.props.children && React.cloneElement(this.props.children)
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  history: historyPropTypes.history,
};

export default App;
