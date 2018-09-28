import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {dracula as style} from 'react-syntax-highlighter/dist/styles';
import Form from '../../components/Form';

class Login extends React.Component {
  render() {
    const codeString = '<Form\n            locale=\"en_US\"\n            name=\"loginForm\"\n            horizontal\n            fields={[\n              {\n                name: \'username\',\n                type: \'text\',\n                label: \'Username\',\n                placeholder: \'user@example.com\',\n                labelSize: {md: 4},\n                fieldSize: {md: 8}\n              },\n              {\n                name: \'password\',\n                type: \'password\',\n                label: \'Password\',\n                placeholder: \'**********\',\n                labelSize: {md: 4},\n                fieldSize: {md: 8}\n              },\n              {\n                row: {\n                  hideOnStatic: true,\n                  col: [\n                    {\n                      md: 10,\n                      mdOffset: 2,\n                      children: [\n                        {type: \'success\', message: \'You successfully loggedin\'},\n                        {type: \'error\', message: \'Please check your username and password. Tip! username: user@example.com, password: password\'}\n                      ]\n                    }\n                  ]\n                }\n              },\n              {\n                buttonToolbar: {\n                  md: 8,\n                  mdOffset: 4,\n                  children: [\n                    {\n                      type: \'submit\',\n                      name: \'submit\',\n                      value: \'log me in!\',\n                      bsStyle: \'primary\'\n                    },\n                    {\n                      type: \'button\',\n                      name: \'submit\',\n                      value: \'Some other button\',\n                      onClick: () => {\n                        alert(\'Clicked some other button!\');\n                      }\n                    }\n                  ]\n                }\n              }\n            ]}\n            validate={(data) => {\n              const ret = [];\n              if (!data.username) {\n                ret.username = \'Username is mandatory\';\n              } else if (data.username !== \'user@example.com\') {\n                ret.username = \'Oopsie, this user is not found\';\n              }\n              if (!data.password) {\n                ret.password = \'Password is mandatory\';\n              } else if (data.password !== \'password\') {\n                ret.password = \'Oopsie, this password is just wrong\';\n              }\n              return ret;\n            }}\n          \/>';

    return (
      <div>
        <h2>Login</h2>
        <Well>
          <Form
            locale="en_US"
            name="loginForm"
            initialValues={{dropdown: 1}}
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
                type: 'text',
                label: 'Password',
                placeholder: '**********',
                labelSize: {md: 4},
                fieldSize: {md: 8},
                options: [
                  {value: null, desc: '--Maak een keuze--'},
                  {value: 1, desc: 'Tabel'},
                  {value: 2, desc: 'Selectbox'},
                  {value: 3, desc: 'Radiobutton'},
                  {value: 4, desc: 'Checkbox'},
                  {value: 5, desc: 'Vrij tekstveld'},
                  {value: 6, desc: 'Geen antwoordmogelijkheden'},
                  {value: 7, desc: 'Getal (x.xx)'},
                  {value: 8, desc: 'Tekstregel'},
                ],
                buttonAfter: {
                  type: 'dropDown',
                  name: 'dropdown',
                  value: 'log me in!',
                  bsStyle: 'primary',
                  id: 'button-id',
                  items: [
                    {value: 1, desc: 'Keuze 1'},
                    {value: 2, desc: 'Keuze 2'}
                  ]
                }
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
            onSubmit={async (values) => {
              console.log('values', values);
              return new Promise((resolve) => {
                resolve({username: 'Failure'});
              });
            }}
            destroyOnUnmount={false}

          />
          <Clearfix />
        </Well>
        <SyntaxHighlighter language="jsx" showLineNumbers style={style}>{codeString}</SyntaxHighlighter>
        <a href="">source on github</a>
      </div>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
