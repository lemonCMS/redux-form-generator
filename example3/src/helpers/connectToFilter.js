import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {storeState} from 'redux/modules/reduxRouter/actions';
import {stringifyFullState, createAllParamsForFetch} from 'utils/functions';
import classNames from 'classnames';
let myTimeout = null;
import Qs from 'qs';

// let scrollTop = null;

export default function connectToFilter() {
  return (WrappedComponent) => {
    @connect(state => ({
      'router': state.router,
      'reduxRouterReducer': state.reduxRouterReducer
    }))
    class StateConnection extends Component {
      static propTypes = {
        'name': PropTypes.string,
        'router': PropTypes.object,
        'reduxRouterReducer': PropTypes.object,
        'history': PropTypes.object,
        'dispatch': PropTypes.func,
        'pushState': PropTypes.func,
      };

      static contextTypes = {
        'router': PropTypes.object
      };

      constructor() {
        super();
        this.switchPage = this.switchPage.bind(this);
        this.pushOnState = this.pushOnState.bind(this);
        this.pushStateAttempt = this.pushStateAttempt.bind(this);
        this.getParams = this.getParams.bind(this);
        this.toggleOnStack = this.toggleOnStack.bind(this);
        this.inputOnStack = this.inputOnStack.bind(this);
        this.onStack = this.onStack.bind(this);
        this.sortOnStack = this.sortOnStack.bind(this);
        this.removeFromState = this.removeFromState.bind(this);
        this.alphabet = this.alphabet.bind(this);
        this.alphaFilter = this.alphaFilter.bind(this);
        this.state = {
          form: {},
          skip: true
        };
      }

      componentWillMount() {
        this.setState({form: createAllParamsForFetch(this.props)});
      }

      componentWillReceiveProps(nextProps) {
        // console.log('Component will receive props');
        const action = nextProps.router.location.action;
        // console.log('1 FILER componentWillReceiveProps Action: ', action);
        if (action === 'POP' && this.state.skip === false) {
          const state = {};
          // console.log('2 FILER componentWillReceiveProps Action: ', action);
          const params = _.assign({},
              Qs.parse(_.get(nextProps, ['router', 'location', 'search'], {}).substr(1))
          );
          state.form = params;
          state.skip = false;
          this.setState(state);
        }

        if (action === 'POP' && this.state.skip === true) {
          this.setState({skip: false});
        }
      }

/*      componentWillReceiveProps(nextProps) {
        const state = {};
        // const action = nextProps.router.location.action;

        // if (action === 'POP' && this.state.skip === false) {
/!*
        const params = _.assign({},
          Qs.parse(_.get(nextProps, ['router', 'location', 'search'], {}).substr(1))
        );
        state.form = params;
*!/
        // }

        if (this.state.skip === true) {
          // state.skip = false;
        }

        this.setState(state);
      }*/

/*      componentWillUpdate() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop || scrollTop;
      }*/

/*      componentDidUpdate() {
        window.scroll(0, scrollTop);
      }*/

/*      componentWillUnmount() {
        scrollTop = 0;
        window.scroll(0, scrollTop);
      }*/

      onStack(key: string, value) {
        return (!!this.state.form[key] && this.state.form[key].indexOf(String(value)) > -1);
      }

      getParams() {
        return createAllParamsForFetch(this.props);
      }

      inputOnStack(key: string) {
        return (!!this.state.form[key] ? this.state.form[key] : null );
      }

      sortOnStack(field) {
        const state = Object.assign({}, this.state.form);

        if (_.has(state, 'sort')) {
          if (_.get(state, 'sort.field') === field && _.get(state, 'sort.order') === 'asc') {
            state.sort = {
              'field': field,
              'order': 'desc'
            };
          } else {
            state.sort = {
              'field': field,
              'order': 'asc'
            };
          }
        } else {
          state.sort = {
            'field': field,
            'order': 'asc'
          };
        }
        this.setState({'form': state}, this.pushStateAttempt);
      }

      toggleOnStack(key: string, value) {
        const state = Object.assign({}, this.state.form);

        if (!state[key]) {
          state[key] = [value];
        } else {
          const index = state[key].indexOf(String(value));
          if (index < 0) {
            state[key].push(value);
          } else {
            delete state[key][index];
          }
        }
        if (!!state.page) {
          state.page = null;
        }
        this.setState({'form': state, skip: true}, this.pushStateAttempt);
      }

      removeFromState(key: string) {
        const state = Object.assign({}, this.state.form);
        delete state[key];
        this.setState({'form': state, skip: true}, this.pushStateAttempt);
      }

      pushOnState(key: string, value) {
        const state = Object.assign({}, this.state.form);
        state[key] = value;
        if (!!state.page) {
          state.page = null;
        }
        this.setState({'form': state, skip: true}, this.pushStateAttempt);
      }

      pushStateAttempt() {
        this.props.dispatch(storeState(this.props.router.location.pathname, this.state.form));
        const q = stringifyFullState(this.state.form);
        if (q.length > 0) {
          this.context.router.push(_.get(this.props.router, 'location.pathname') + '?' + q);
        } else {
          this.context.router.push(_.get(this.props.router, 'location.pathname'));
        }
      }

      switchPage(page: number) {
        const state = Object.assign({}, this.state.form);
        state.page = page;
        this.setState({form: state}, this.pushStateAttempt);
      }

      pushSearch(e) {
        const value = e.target.value;
        this.setState({
          q: value,
          skip: false
        }, () => {
          if (myTimeout) {
            clearTimeout(myTimeout);
          }
          myTimeout = setTimeout(() => {
            this.pushOnState('q', value);
          }, 500);
        });
      }

      alphabet() {
        const stack = this.inputOnStack('alfa');
        const name = 'alfa';
        const range = ['~', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        return (
          <div className="panel panel-border-tb">
            <div className="panel-heading">
              <h4 className="pnael-title">Alfabet</h4>
            </div>
            <div className="panel-body">
              <div className="filter-color-container">
                <div className="row">
                  {_.map(range, (val, key) => {
                    return this.alphaFilter(name, key, val, stack);
                  })}
                </div>
              </div>
            </div>
          </div>);
      }

      alphaFilter(name, key, item, stack) {
        if (stack === item) {
          return (
            <a key={key} className={classNames({'filter-size-box': true, 'active': stack === item})}
               onClick={() => { this.removeFromState(name, item); }}>
              {item}
            </a>);
        }

        return (
          <a key={key} className={classNames({'filter-size-box': true, 'active': stack === item})}
             onClick={() => { this.pushOnState(name, item); }}>
            {item}
          </a>
        );
      }

      render() {
        return (<WrappedComponent
          {...this.props}
          switchPage={this.switchPage}
          pushOnState={this.pushOnState}
          removeFromState={this.removeFromState}
          getParams={this.getParams}
          toggleOnStack={this.toggleOnStack}
          inputOnStack={this.inputOnStack}
          onStack={this.onStack}
          sortOnStack={this.sortOnStack}
          alphabet={this.alphabet}
          />);
      }
    }

    return StateConnection;
  };
}
