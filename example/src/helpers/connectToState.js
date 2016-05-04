import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, getActionStatus} from 'utils/functions';
import {create, clearNetworkState, clearItem} from 'redux/modules/data/actions';

export default function connectToState(reducerIndex, reducerKey, reducerItem) {
  return (DecoratedComponent) => {
    @connect(state=> {
      const obj = {};
      obj[reducerIndex] = state[reducerIndex];
      return obj;
    }, mapDispatchToProps)
    class StateConnection extends Component {

      static propTypes = {
        'dispatch': PropTypes.func
      };

      constructor(props) {
        super(props);
        this.getActionState = this.getActionState.bind(this);
        this.clearActionState = this.clearActionState.bind(this);
        this.clearItem = this.clearItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      getActionState() {
        return getActionStatus(this.props, [reducerIndex, reducerKey, reducerItem]);
      }

      clearActionState() {
        this.props.dispatch(clearNetworkState(reducerKey));
      }

      clearItem() {
        this.props.dispatch(clearItem(reducerKey));
      }

      handleSubmit(values, dispatch) {
        return new Promise((resolve, reject) => {
          dispatch(create(reducerKey, values))
            .then((ret)=> {
              if (_.has(ret, 'error')) {
                reject(ret.error);
              } else {
                resolve();
              }
            });
        });
      }

      render() {
        return (<DecoratedComponent
          getActionState={this.getActionState}
          clearActionState={this.clearActionState}
          clearItem={this.clearItem}
          handleSubmit={this.handleSubmit}
        />);
      }
    }
    return StateConnection;
  };
}
