import React from 'react';
import TestResource from './TestResource';
import Well from 'react-bootstrap/lib/Well';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github as style} from 'react-syntax-highlighter/dist/styles';
import Form from '../../components/Form/Form';

class Resource extends React.Component {
  render() {
    const codeString = '<Form\n            name=\"resource\"\n            horizontal\n            fields={[\n              {\n                name: \'resource\',\n                type: \'resource\',\n                labelSize: {md: 4},\n                fieldSize: {md: 8},\n                resource: props => <TestResource {...props} \/>\n              }\n            ]}\n            \/>';
    return (
      <div>
        <h2>Form with modal resource</h2>
        <Well>
          <p>
              Defining a resource on a empty form is relative simple.
          </p>
          <Form
            name="resource"
            horizontal
            fields={[
              {
                name: 'resource',
                type: 'resource',
                labelSize: {md: 4},
                fieldSize: {md: 8},
                resource: props => <TestResource {...props} />
              },
              {
                buttonToolbar: {
                  md: 8,
                  mdOffset: 4,
                  children: [
                    {
                      type: 'submit',
                      name: 'submit',
                      value: 'log me in!',
                      bsStyle: 'primary'
                    },
                    {
                      type: 'button',
                      name: 'submit',
                      value: 'Some other button',
                      onClick: () => {
                        alert('Clicked some other button!');
                      }
                    }
                  ]
                }
              }
            ]}
            validate={() => {
              return {resource: 'verplicht'};
            }}
            />
        </Well>
        <SyntaxHighlighter language="jsx" showLineNumbers style={style}>{codeString}</SyntaxHighlighter>
        <Well>
          <h4>TestResource.jsx</h4>
          <p>
            How does TestResource work?
          </p>
          <p>
           The following properties are appended on to TestResource.
            <ul>
              <li>clonedValues</li>
              <li>clonedList</li>
              <li>callBack</li>
              <li>show</li>
              <li>closeResource</li>
            </ul>
          </p>
        </Well>
        <Well>
          <h4>clonedValues <small>(Array)</small></h4>
          <p>
            This property is an array containing the selected values from redux-form field
          </p>
          {(() => {
            const cString = '[1]';
            return (<SyntaxHighlighter language="javascript" showLineNumbers style={style}>{cString}</SyntaxHighlighter>);
          })()}

        </Well>
        <Well>
          <h4>clonedList <small>(Array)</small></h4>
          <p>
            This property is an array containing the displayed selected items. This is the array you see after selecting  a item in from the resource modal.
          </p>
          {(() => {
            const cString = '[\n\t{\n\t\tvalue: 1,\n\t\tdesc: \'Item 1\',\n\t}\n]';
            return (<SyntaxHighlighter language="javascript" showLineNumbers style={style}>{cString}</SyntaxHighlighter>);
          })()}

        </Well>
        <Well>
          <h4>Callback(values, list) <small>(function)</small></h4>
          <p>
            A function you call when you want to return the selected item into the form.
          </p>
          <p>
            <strong>values</strong>: The array you return with all the selected items to pass on to redux-form
            {(() => {
              const cString = '[1, 2]';
              return (<SyntaxHighlighter language="javascript" showLineNumbers style={style}>{cString}</SyntaxHighlighter>);
            })()}

          </p>
          <p>
            <strong>list</strong>: The array of objects you return to display the selected values in your form.
          </p>
          {(() => {
            const cString = '[\n\t{\n\t\tvalue: 1,\n\t\tdesc: \'Item 1\',\n\t},\n\t{\n\t\tvalue: 2,\n\t\tdesc: \'Item 2\',\n\t}\n]';
            return (<SyntaxHighlighter language="javascript" showLineNumbers style={style}>{cString}</SyntaxHighlighter>);
          })()}
        </Well>

        <Well>
          <h4>show <small>(boolean)</small></h4>
          <p>This property you append Modal show property.</p>
        </Well>
        <Well>
          <h4>close <small>(function)</small></h4>
          <p>Call this fucntion to close the dialog</p>
        </Well>
      </div>
    );
  }
}

Resource.propTypes = {};
Resource.defaultProps = {};

export default Resource;
