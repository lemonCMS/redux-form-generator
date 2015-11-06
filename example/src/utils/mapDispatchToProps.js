import { bindActionCreators } from 'redux';
import { pushState } from 'redux-router';

export default function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    pushState: bindActionCreators(pushState, dispatch)
  };
}
