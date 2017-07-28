import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Well from 'react-bootstrap/lib/Well';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula as style} from 'react-syntax-highlighter/dist/styles';
import Form from '../../components/Form/Form';

class Register extends React.Component {
  render() {
    const codeString = '<Form\n            locale=\"en_US\"\n            name=\"loginForm\"\n            horizontal\n            fields={[\n              {\n                type: \'plain\',\n                value: \'Gives us your username and password :P.\'\n              },\n              {\n                name: \'username\',\n                type: \'text\',\n                label: \'Username\',\n                placeholder: \'user@example.com\',\n                labelSize: {md: 4},\n                fieldSize: {md: 8}\n              },\n              {\n                name: \'password\',\n                type: \'password\',\n                label: \'Password\',\n                placeholder: \'**********\',\n                labelSize: {md: 4},\n                fieldSize: {md: 8}\n              },\n              {\n                name: \'password_repeat\',\n                type: \'password\',\n                label: \'Password repeat\',\n                placeholder: \'**********\',\n                labelSize: {md: 4},\n                fieldSize: {md: 8}\n              },\n              {\n                type: \'plain\',\n                value: <p>Tell us, what is your name?<\/p>\n              },\n              {\n                row: {\n                  col: [\n                    {\n                      md: 4,\n                      children: [\n                        {\n                          type: \'plain\',\n                          value: (<div className=\"form-group\"><label className=\"col-md-12 control-label\">Fullname<\/label><\/div>) \/\/ eslint-disable-line jsx-a11y\/label-has-for\n                        }\n                      ]\n                    },\n                    {\n                      md: 3,\n                      children: [\n                        {\n                          name: \'firstname\',\n                          type: \'text\',\n                          placeholder: \'First name\',\n                          fieldSize: {md: 12}\n                        }\n                      ]\n                    },\n                    {\n                      md: 2,\n                      children: [\n                        {\n                          name: \'suffix\',\n                          type: \'text\',\n                          placeholder: \'Suffix\',\n                          fieldSize: {md: 12}\n                        }\n                      ]\n                    },\n                    {\n                      md: 3,\n                      children: [\n                        {\n                          name: \'surname\',\n                          type: \'text\',\n                          placeholder: \'Surname\',\n                          fieldSize: {md: 12}\n                        }\n                      ]\n                    }\n                  ]\n                }\n              },\n              {\n                type: \'plain\',\n                value: <p>Tell us, where do you live?<\/p>\n              },\n              {\n                name: \'living\',\n                type: \'radio\',\n                fieldSize: {mdOffset: 4, md: 8},\n                options: [\n                  {value: 1, desc: \'Mommy and daddy!\'},\n                  {value: 2, desc: \'On my own, playing the part of grownup\'}\n                ]\n              },\n              {\n                type: \'plain\',\n                value: (<Alert bsStyle=\"warning\">Please come again when you are a big person<\/Alert>),\n                show: () => ({\n                  field: \'living\',\n                  value: 1\n                })\n              },\n              {\n\n                show: () => ({\n                  field: \'living\',\n                  value: 2\n                }),\n                wrap: [\n                  {\n                    type: \'plain\',\n                    value: \'<strong>What is your adress?<\/strong>\'\n                  },\n                  {\n                    row: {\n                      col: [\n                        {\n                          md: 4,\n                          children: [\n                            {\n                              type: \'plain\',\n                              value: (<div className=\"form-group\"><label className=\"col-md-12 control-label\">Adress<\/label><\/div>) \/\/ eslint-disable-line jsx-a11y\/label-has-for\n                            }\n                          ]\n                        },\n                        {\n                          md: 6,\n                          children: [\n                            {\n                              name: \'street\',\n                              type: \'text\',\n                              placeholder: \'Street name\',\n                              fieldSize: {md: 12}\n                            }\n                          ]\n                        },\n                        {\n                          md: 2,\n                          children: [\n                            {\n                              name: \'housenumber\',\n                              type: \'text\',\n                              placeholder: \'House number\',\n                              fieldSize: {md: 12}\n                            }\n                          ]\n                        }\n                      ]\n                    }\n                  },\n                  {\n                    row: {\n                      col: [\n                        {\n                          md: 4,\n                          children: [\n                            {\n                              type: \'plain\',\n                              value: (<div className=\"form-group\"><label className=\"col-md-12 control-label\">Zip<\/label><\/div>) \/\/ eslint-disable-line jsx-a11y\/label-has-for\n                            }\n                          ]\n                        },\n                        {\n                          md: 2,\n                          children: [\n                            {\n                              name: \'zip\',\n                              type: \'text\',\n                              placeholder: \'Zip\',\n                              fieldSize: {md: 12}\n                            }\n                          ]\n                        },\n                        {\n                          md: 2,\n                          children: [\n                            {\n                              name: \'plain\',\n                              type: \'plain\',\n                              value: (<div className=\"form-group\"><label className=\"col-md-12 control-label\">City<\/label><\/div>) \/\/ eslint-disable-line jsx-a11y\/label-has-for\n                            }\n                          ]\n                        },\n                        {\n                          md: 4,\n                          children: [\n                            {\n                              name: \'city\',\n                              type: \'text\',\n                              placeholder: \'City\',\n                              fieldSize: {md: 12}\n                            }\n                          ]\n                        }\n                      ]\n                    }\n                  },\n                ]\n              },\n\n              {\n                row: {\n                  hideOnStatic: true,\n                  col: [\n                    {\n                      md: 10,\n                      mdOffset: 2,\n                      children: [\n                        {type: \'success\', message: \'You successfully loggedin\'},\n                        {type: \'error\', message: \'Please check your username and password. Tip! username: user@example.com, password: password\'}\n                      ]\n                    }\n                  ]\n                }\n              },\n              {\n                buttonToolbar: {\n                  md: 8,\n                  mdOffset: 4,\n                  children: [\n                    {\n                      type: \'submit\',\n                      name: \'submit\',\n                      disabled: () => ({\n                        field: \'living\',\n                        value: 1\n                      }),\n                      value: \'register me!\',\n                      bsStyle: \'primary\'\n                    },\n                    {\n                      type: \'button\',\n                      name: \'submit\',\n                      value: \'Some other button\',\n                      onClick: () => {\n                        alert(\'Clicked some other button!\');\n                      }\n                    }\n                  ]\n                }\n              }\n            ]}\n            validate={(data) => {\n              const ret = [];\n              if (!data.username) {\n                ret.username = \'Username is mandatory\';\n              } else if (data.username !== \'user@example.com\') {\n                ret.username = \'Oopsie, this user is not found\';\n              }\n              if (!data.password) {\n                ret.password = \'Password is mandatory\';\n              } else if (data.password !== \'password\') {\n                ret.password = \'Oopsie, this password is just wrong\';\n              }\n              return ret;\n            }}\n          \/>';
    return (
      <div>
        <h2>Register</h2>
        <Well>
          <Form
            locale="en_US"
            name="loginForm"
            horizontal
            fields={[
              {
                type: 'plain',
                value: 'Gives us your username and password :P.'
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
                fieldSize: {md: 8}
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
                  show: () => ({
                    field: 'living',
                    value: 1
                  }),
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
                show: () => ({
                  field: 'living',
                  value: 1
                })
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
                      disabled: () => ({
                        field: 'living',
                        value_not: 2
                      }),
                      value: 'register me!',
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
        <a href="">source on github</a>
      </div>
    );
  }
}

Register.propTypes = {};
Register.defaultProps = {};

export default Register;
