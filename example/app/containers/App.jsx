import React, {PropTypes} from 'react';
import classNames from 'classnames/bind';
import styles from '../css/main.css';

require('../helpers/moment');

const cx = classNames.bind(styles);

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
    <div className={cx('app')}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
