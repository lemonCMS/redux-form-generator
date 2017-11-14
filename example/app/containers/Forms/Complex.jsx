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
                name: 'name',
                label: 'Antwoordmodel',
                type: 'text',
                placeholder: 'Antwoordmodel',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'display_type',
                label: 'Weergave',
                type: 'select',
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
                ]
              },
              {
                name: 'calculation_type',
                label: 'Werking',
                type: 'select',
                labelSize: {md: 4},
                fieldSize: {md: 8},
                options: [
                  {value: 1, desc: 'Standaard werking'},
                  {value: 2, desc: '1 antwoord mogelijk over alle substellingen'},
                  {value: 3, desc: 'Meerdere antwoorden mogelijk per substelling'},
                  {value: 4, desc: 'Standaard werking, over substellingen rekenen met de hoogste score'},
                ]
              },
              {
                name: 'items',
                show: () => ({
                  field: 'display_type',
                  value: '1'
                }),
                type: 'complex',
                label: 'Substellingen',
                addBtn: {label: 'Item toevoegen'},
                moveBtn: {bsSize: 'xs'},
                removeBtn: {wrapperClassName: 'clearfix', title: 'verwijderen', className: 'pull-right clearfix', bsSize: 'xs'},
                labelSize: {md: 4},
                fieldSize: {md: 8},
                collapsed: false,
                children: [
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
                    name: 'complex2',
                    label: 'Multiple items',
                    type: 'complex',
                    show: () => ({
                      field: 'field4',
                      value: 1
                    }),
                    children: [
                      {
                        name: 'field99',
                        type: 'checkbox',
                        label: 'Field 99',
                        labelSize: {md: 4},
                        fieldSize: {md: 8},
                        options: [
                          {value: 1, desc: 'Show field 5'}
                        ]
                      }
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
                    row: {
                      col: [
                        {
                          md: 3,
                          children: [
                            {
                              name: 'No',
                              type: 'text',
                              placeholder: 'NO',
                              fieldSize: {md: 12}
                            }
                          ]
                        },
                        {
                          md: 9,
                          children: [
                            {
                              name: 'name',
                              type: 'text',
                              placeholder: 'Substelling',
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
                          md: 3,
                          children: [
                            {
                              name: 'add_score',
                              type: 'checkbox',
                              fieldSize: {md: 12},
                              options: [
                                {value: 1, desc: 'Score'}
                              ]
                            }
                          ]
                        },
                        {
                          md: 9,
                          children: [
                            {
                              name: 'score',
                              type: 'number',
                              placeholder: '1',
                              fieldSize: {md: 12},
                              show: () => ({
                                field: 'calculation_type',
                                value: '4'
                              })
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
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
