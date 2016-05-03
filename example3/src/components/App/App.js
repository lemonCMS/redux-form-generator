import React, {Component} from 'react';
import DynamicForm from '../../generator/DynamicForm';
import form from './form';
import validate from './validate';

class App extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('Submit data');
  }

  render() {
    return (
      <div className="container">
        <h1>Formulier</h1>
        <DynamicForm
            checkKey={'forms'}
            formName={'form1'}
            formClass="form-horizontal"
            fieldsNeeded={form()}
            initialValues={{field_1: 'abba', field_3: '3', field_4: '2'}}
            validate={validate}
            onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
