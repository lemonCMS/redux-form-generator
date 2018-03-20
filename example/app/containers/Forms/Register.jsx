import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Well from 'react-bootstrap/lib/Well';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula as style} from 'react-syntax-highlighter/dist/styles';
import {FinalForm as Form} from '../../components/Form';

class Register extends React.Component {
  render() {
    const codeString = '';
    return (
      <div>
        <h2>Register</h2>
        <Well>
          <Form
            locale="en_US"
            name="loginForm"
            horizontal
            initialValues={{text: '<b>amber</b>'}}
            fields={[
              {
                type: 'plain',
                value: 'Gives us your username and password :P.'
              },
              {
                name: 'text',
                type: 'rte',
                id: 'rte-1',
                label: 'Username',
                placeholder: 'user@example.com',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'datetime',
                type: 'datetime',
                label: 'Datum + Tijd',
                display: 'valueOf',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
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
                name: 'password_repeat',
                type: 'password',
                label: 'Password repeat',
                placeholder: '**********',
                labelSize: {md: 4},
                fieldSize: {md: 8},
                hidden: () => (
                  'field password === null ' +
                  'and ' +
                  'field username === 1'
                )
              },
              {
                type: 'plain',
                value: <p>Tell us, what is your name?</p>
              },
              {
                row: {
                  col: [
                    {
                      md: 4,
                      children: [
                        {
                          type: 'plain',
                          value: (<div className="form-group"><label className="col-md-12 control-label">Fullname</label></div>) // eslint-disable-line jsx-a11y/label-has-for
                        }
                      ]
                    },
                    {
                      md: 3,
                      children: [
                        {
                          name: 'firstname',
                          type: 'text',
                          placeholder: 'First name',
                          fieldSize: {md: 12}
                        }
                      ]
                    },
                    {
                      md: 2,
                      children: [
                        {
                          name: 'suffix',
                          type: 'text',
                          placeholder: 'Suffix',
                          fieldSize: {md: 12}
                        }
                      ]
                    },
                    {
                      md: 3,
                      children: [
                        {
                          name: 'surname',
                          type: 'text',
                          placeholder: 'Surname',
                          fieldSize: {md: 12}
                        }
                      ]
                    }
                  ]
                }
              },
              {
                type: 'plain',
                value: <p>Tell us, where do you live?</p>
              },
              {
                row: {
                  show: (() => ({
                    field: 'living',
                    value: 1.1
                  }))(),
                  col: [
                    {
                      md: 10,
                      mdOffset: 2,
                      children: [
                        {type: 'plain', value: 'You successfully loggedin'},
                      ]
                    }
                  ]
                }
              },
              {
                name: 'living',
                type: 'radio',
                fieldSize: {mdOffset: 4, md: 8},
                options: [
                  {value: 1, desc: 'Mommy and daddy!'},
                  {value: 2, desc: 'On my own, playing the part of grownup'}
                ]
              },
              {
                type: 'plain',
                value: (<Alert bsStyle="warning">Please come again when you are a big person</Alert>),
                show: values => (values.living === 1)
              },
              {

                show: () => ({
                  field: 'living',
                  value: 2
                }),
                wrap: [
                  {
                    type: 'plain',
                    value: '<strong>What is your adress?</strong>'
                  },
                  {
                    row: {
                      col: [
                        {
                          md: 4,
                          children: [
                            {
                              type: 'plain',
                              value: (<div className="form-group"><label className="col-md-12 control-label">Adress</label></div>) // eslint-disable-line jsx-a11y/label-has-for
                            }
                          ]
                        },
                        {
                          md: 6,
                          children: [
                            {
                              name: 'street',
                              type: 'text',
                              placeholder: 'Street name',
                              fieldSize: {md: 12}
                            }
                          ]
                        },
                        {
                          md: 2,
                          children: [
                            {
                              name: 'housenumber',
                              type: 'text',
                              placeholder: 'House number',
                              fieldSize: {md: 12}
                            }
                          ]
                        }
                      ]
                    }
                  },
                  {
                    row: {
                      col: [
                        {
                          md: 4,
                          children: [
                            {
                              type: 'plain',
                              value: (<div className="form-group"><label className="col-md-12 control-label">Zip</label></div>) // eslint-disable-line jsx-a11y/label-has-for
                            }
                          ]
                        },
                        {
                          md: 2,
                          children: [
                            {
                              name: 'zip',
                              type: 'text',
                              placeholder: 'Zip',
                              fieldSize: {md: 12}
                            }
                          ]
                        },
                        {
                          md: 2,
                          children: [
                            {
                              name: 'plain',
                              type: 'plain',
                              value: (<div className="form-group"><label className="col-md-12 control-label">City</label></div>) // eslint-disable-line jsx-a11y/label-has-for
                            }
                          ]
                        },
                        {
                          md: 4,
                          children: [
                            {
                              name: 'city',
                              type: 'text',
                              placeholder: 'City',
                              fieldSize: {md: 12}
                            },
                            {
                              name: 'checkbox_city',
                              type: 'checkbox',
                              single: true,
                              fieldSize: {md: 12},
                              options: [
                                {value: 1, desc: 'Single checkbox'}
                              ]
                            }
                          ]
                        }
                      ]
                    }
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
                        {type: 'success', message: 'You successfully registerd'},
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
                      disabled: () => ({
                        field: 'living',
                        value_not: 2
                      }),
                      value: 'Submit',
                      bsStyle: 'primary'
                    },
                    {
                      type: 'button',
                      name: 'submit',
                      value: 'Click me',
                      onClick: () => {
                        alert('Clicked the other button!');
                      }
                    }
                  ]
                }
              }
            ]}
            validate={(data) => {
              const ret = [];
              if (!data.username) {
                ret.username = 'Username is mandatory';
              } else if (data.username !== 'user@example.com') {
                ret.username = 'Oopsie, this user is not found';
              }
              if (!data.password) {
                ret.password = 'Password is mandatory';
              } else if (data.password !== 'password') {
                ret.password = 'Oopsie, this password is just wrong';
              }
              return ret;
            }}
          />
          <Clearfix />
        </Well>
        <h3>Source</h3>
        <SyntaxHighlighter language="jsx" showLineNumbers style={style}>{codeString}</SyntaxHighlighter>
      </div>
    );
  }
}

Register.propTypes = {};
Register.defaultProps = {};

export default Register;
