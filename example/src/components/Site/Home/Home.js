import _ from 'lodash';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from 'utils/functions';
import Helmet from 'react-helmet';
import DynamicForm from 'redux-form-generator';
import {update, clearNetworkState} from 'redux/modules/example/actions';

const fields = () => {
  return ([
    {
      name: 'picture',
      label: 'Foto',
      type: 'plupload',
      placeholder: 'Bestand',
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
      label: 'Voorletters',
      type: 'text',
      placeholder: 'Voorletters',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'firstname',
      label: 'Voornamen',
      type: 'text',
      placeholder: 'Voornamen',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'middlename',
      label: 'Tussenvoegsel',
      type: 'text',
      placeholder: 'Tussenvoegsel',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'lastname',
      label: 'Achternaam',
      type: 'text',
      placeholder: 'Achternaam',
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
              {type: 'success', message: 'Het formulier is opgeslagen'},
              {type: 'error', message: 'Er zijn fouten opgetreden, controleer het formulier.'}
            ]
          },
          {md: 10, mdOffset: 2, children: [{type: 'submit', name: 'submit', value: 'versturen'}]}
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

  render() {
    return (
      <div>
        <Helmet
          title="Site"
          titleTemplate="MySite.com - %s"
          link={[{'rel': 'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.css', 'type': 'text/css', 'media': 'screen'}]}
          />
        <h1>Home</h1>
        <DynamicForm
          checkKey={'userEdit'}
          formName="userEdit"
          formClass="form-horizontal"
          fieldsNeeded={fields()}
          initialValues={{}}
          onSubmit={this.handleSubmit}
          getActionState={this.getActionState}
          clearActionState={this.clearActionState}
          />
      </div>
    );
  }
}

export default Home;
