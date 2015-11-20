import _ from 'lodash';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from 'utils/functions';
import Helmet from 'react-helmet';
import Resource from './Resource';
import DynamicForm from 'include/DynamicForm';
import {update, clearNetworkState} from 'redux/modules/example/actions';
import validate from './validate';

const fields = (resource) => {
  return ([
    {
      name: 'picture',
      label: 'Picture',
      type: 'plupload',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10',
      url: '/',
      headers: {
        Authorization: 'Bearer laravelAutToken'
      },
      multi_selection: false,
    },

    {
      name: 'initials',
      label: 'Initals',
      type: 'text',
      placeholder: 'Initals',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'firstname',
      label: 'Firstname',
      type: 'text',
      placeholder: 'Firstname',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'middlename',
      label: 'Middlename',
      type: 'text',
      placeholder: 'Middelname',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'lastname',
      label: 'Lastname',
      type: 'text',
      placeholder: 'Lastname',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'resource',
      label: 'Resource',
      type: 'resource',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10',
      callResource: resource,
      list: [
        {value: 1, desc: 'Item 1'},
        {value: 2, desc: 'Item 2'},
        {value: 3, desc: 'Item 3'}
      ]
    },
    {
      name: 'fruits',
      label: 'Fruits',
      type: 'radio',
      searchable: true,
      chunks: 3,
      options: [
        {value: 1, desc: 'apple'},
        {value: 2, desc: 'banana'},
        {value: 3, desc: 'pinapple'},
        {value: 4, desc: 'orange'},
        {value: 5, desc: 'grapes'},
        {value: 6, desc: 'kiwi'},
        {value: 7, desc: 'pear'},
        {value: 8, desc: 'citron'}
      ],
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'fruitsCheckbox',
      label: 'Fruits multiple',
      type: 'checkboxList',
      searchable: true,
      chunks: 3,
      options: [
        {value: 1, desc: 'apple'},
        {value: 2, desc: 'banana'},
        {value: 3, desc: 'pinapple'},
        {value: 4, desc: 'orange'},
        {value: 5, desc: 'grapes'},
        {value: 6, desc: 'kiwi'},
        {value: 7, desc: 'pear'},
        {value: 8, desc: 'citron'}
      ],
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
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

          // For the example alway force an error
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
    return (<Resource show={this.state.showResource} close={this.closeResource} values={_.clone(this.state.resourceValues)} list={_.clone(this.state.resourceList)} callBack={this.state.resourceCB}/>);
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
          formClass="form-horizontal"
          fieldsNeeded={fields(this.showResource)}
          initialValues={{resource: [1, 2, 3], fruits: 4}}
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
