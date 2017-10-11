import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula as style} from 'react-syntax-highlighter/dist/styles';
import Form from '../../components/Form/Form';

class Complex extends React.Component {
  render() {
    const codeString = '';

    return (
      <div>
        <h2>Login</h2>
        <Well>
          <Form
            locale="en_US"
            name="loginForm"
            horizontal
            fields={[
              {
                name: 'username',
                type: 'text',
                label: 'Username',
                placeholder: 'user@example.com',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'password',
                type: 'password',
                label: 'Password',
                placeholder: '**********',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'items',
                label: 'Multiple items',
                type: 'complex',
                children: [
                  {
                    name: 'field1',
                    type: 'text',
                    label: 'Field 1',
                    labelSize: {md: 4},
                    fieldSize: {md: 8}
                  },
                  {
                    name: 'field2',
                    type: 'text',
                    label: 'Field 2',
                    labelSize: {md: 4},
                    fieldSize: {md: 8}
                  },
                  {
                    name: 'field3',
                    type: 'text',
                    label: 'Field 3',
                    labelSize: {md: 4},
                    fieldSize: {md: 8}
                  },
                  {
                    name: 'field4',
                    type: 'checkbox',
                    label: 'Field 4',
                    labelSize: {md: 4},
                    fieldSize: {md: 8},
                    options: [
                      {value: 1, desc: 'Show field 5'}
                    ]
                  },
                  {
                    name: 'field5',
                    type: 'text',
                    label: 'Field 5',
                    labelSize: {md: 4},
                    fieldSize: {md: 8},
                    show: () => ({
                      field: 'field4',
                      value: 1
                    })
                  },
                  {
                    name: 'field6',
                    type: 'radio',
                    label: 'Field 4',
                    labelSize: {md: 4},
                    fieldSize: {md: 8},
                    disabled: () => ({
                      field: 'field4',
                      value: 1
                    }),
                    options: [
                      {value: 1, desc: 'Option 1'},
                      {value: 2, desc: 'Option 2'},
                      {value: 3, desc: 'Option 3'}
                    ]
                  },
                  {
                    name: 'field7',
                    type: 'plupload',
                    label: 'Field 7',
                    labelSize: {md: 4},
                    fieldSize: {md: 8},
                    hidden: () => ({
                      field: 'field4',
                      value: 1
                    })
                  },

                ]
              },
              {
                row: {
                  hideOnStatic: true,
                  col: [
                    {
                      md: 10,
                      mdOffset: 2,
                      children: [
                        {type: 'success', message: 'You successfully loggedin'},
                        {type: 'error', message: 'Please check your username and password. Tip! username: user@example.com, password: password'}
                      ]
                    }
                  ]
                }
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
              return [];
            }}
          />
          <Clearfix />
        </Well>
        <SyntaxHighlighter language="jsx" showLineNumbers style={style}>{codeString}</SyntaxHighlighter>
        <a href="">source on github</a>
      </div>
    );
  }
}

Complex.propTypes = {};
Complex.defaultProps = {};

export default Complex;
