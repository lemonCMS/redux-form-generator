import _ from 'lodash';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from 'utils/functions';
import Helmet from 'react-helmet';
import Resource from './Resource';
import DynamicForm from 'redux-form-generator';
import {update, clearNetworkState} from 'redux/modules/example/actions';
import validate from './validate';

const fields = () => {
  return ([
    {
      name: 'selectbox',
      label: 'Selectbox',
      type: 'select',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10',
      options: [
        {value: 'home', desc: 'Home'},
        {value: 'zoeken', desc: 'Zoeken'},
        {value: 'contact', desc: 'Contact'},
        {value: 'voorwaarden', desc: 'Voorwaarden'},
        {value: 'dashboard-overzicht', desc: 'Dashboard/Overzicht'},
        {value: 'dashboard-registreer', desc: 'Dashboard/Registreer'},
        {value: 'dashboard-affiliates', desc: 'Dashboard/Affiliates Koppelen'},
        {value: 'dashboard-wijzigen', desc: 'Dashboard/Wijzigen'},
        {value: 'dashboard-account', desc: 'Dashboard/Account'}
      ]
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'text',
      placeholder: 'E-mail',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'email2',
      label: 'E-mail 2',
      type: 'text',
      placeholder: 'E-mail',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'email3',
      label: 'E-mail 3',
      type: 'text',
      placeholder: 'E-mail',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      row: {
        col: [
          {
            md: 10, mdOffset: 2, children: [
              {type: 'success', message: 'The form is saved.'},
              {type: 'error', message: 'There was an error.'}
            ]
          },
          {md: 10, mdOffset: 2, children: [{type: 'submit', name: 'submit', value: 'send'}]}
        ]
      }
    }
  ]);
};

@connect(state=>({
  'example': state.example
}), mapDispatchToProps)
class Home extends React.Component {

  static propTypes = {
    'dispatch': PropTypes.func,
    'example': PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.getActionState = this.getActionState.bind(this);
    this.clearActionState = this.clearActionState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderResource = this.renderResource.bind(this);
    this.showResource = this.showResource.bind(this);
    this.closeResource = this.closeResource.bind(this);
    this.state = {
      showResource: false
    };
  }

  // Return the state of your dispatched action
  getActionState() {
    return {
      success: _.get(this.props, 'example.actionUpdate.success', false),
      failed: _.get(this.props, 'example.actionUpdate.failed', false),
      pending: _.get(this.props, 'example.actionUpdate.pending', false)
    };
  }

  // dispatch an action to reset te current state in your store
  clearActionState() {
    this.props.dispatch(clearNetworkState());
  }

  // Params, values, dispatch
  // Use dispatch and return a promise
  handleSubmit(values, dispatch) {

    // Handle server returned errors
    return new Promise((resolve, reject) => {
      dispatch(update(values))
          .then((ret)=> {

            // For the example always force an error
            reject({email: 'Already in use'});

            if (_.has(ret, 'error')) {
              reject(ret.error);
            } else {
              resolve();
            }
          });
    });
  }

  showResource(values, list, cb) {
    this.setState({
      showResource: true,
      resourceValues: values,
      resourceList: list,
      resourceCB: cb
    });
  }

  closeResource() {
    this.setState({showResource: false});
  }

  renderResource() {
    return (
        <Resource show={this.state.showResource} close={this.closeResource} values={_.clone(this.state.resourceValues)}
                  list={_.clone(this.state.resourceList)} callBack={this.state.resourceCB}/>);
  }

  render() {
    return (
        <div>
          <Helmet
              title="reduc-form-generator"
              titleTemplate="MySite.com - %s"
              link={[{'rel': 'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.css', 'type': 'text/css', 'media': 'screen'}]}
          />

          <h1>reduc form generator example</h1>

          <p>Use the example with chrome or firefox.</p>

          <p>
            Get the source on <a href="https://github.com/lemonCMS/redux-form-generator">github.com</a>
          </p>

          <p>
            Get the package on <a href="https://www.npmjs.com/package/redux-form-generator">npmjs.com</a>
          </p>
          <DynamicForm
              checkKey={'userEdit'}
              formName="userEdit"
              formKey="lala"
              formClass="form-horizontal"
              fieldsNeeded={fields(this.showResource)}
              initialValues={{resource: [1, 2, 3], fruits: 4, selectbox: 'dashboard-affiliates'}}
              validate={validate}
              onSubmit={this.handleSubmit}
              getActionState={this.getActionState}
              clearActionState={this.clearActionState}
          />
          {this.renderResource()}
        </div>
    );
  }
}

export default Home;
