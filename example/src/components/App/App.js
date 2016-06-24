import _clone from 'lodash/clone';
import React, {Component} from 'react';
import DynamicForm from '../../generator/DynamicForm';
import Resource from './Resource';
import form from './form';
import validate from './validate';
import Helmet from 'react-helmet';

class App extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showResource = this.showResource.bind(this);
    this.renderResource = this.renderResource.bind(this);
    this.closeResource = this.closeResource.bind(this);
    this.state = {
      showResource: false,
      resourceValues: [],
      resourceList: []
    };
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
      <Resource show={this.state.showResource} close={this.closeResource} values={_clone(this.state.resourceValues)}
                list={_clone(this.state.resourceList)} callBack={this.state.resourceCB}/>);
  }

  handleSubmit() {
    console.log('Submit data');
  }

  render() {
    return (
      <div className="container">
        <Helmet
          title="Redux form generator - Example"
        />
        <h1>FormElements</h1>
        <DynamicForm
          checkKey={'forms'}
          formName={'form1'}
          formClass="form-horizontal"
          fieldsNeeded={form(this.showResource)}
          initialValues={{
            field_1: 'abba',
            field_3: '3',
            field_4: '2',
            field_5: 'ababa\r\ndddddd',
            field_6: [1, '2', 3],
            field_6_1: 1,
            field_6_2: ['2', '3', 5],
            field_7: 'some test field',
            field_7_1: '2',
            field_8: '<h1>Header</h1><p>Paragraph</p>',
            field_9: [1, 2, 3],
            field_11: 1576752960000,
            complex: [
              {test1: 'kaas'},
              {test2: 'Chips'}
            ]
          }}
          validate={validate}
          onSubmit={this.handleSubmit}
        />
        {this.renderResource()}
      </div>
    );
  }
}

export default App;
