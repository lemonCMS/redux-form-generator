import _get from 'lodash/get';
import React from 'react';
import {connect} from 'react-redux';
import {load} from 'reducers/store';
import Form from '../components/Form/Form';
import TestResource from './TestResource';
import { SubmissionError } from 'redux-form';  // ES6

@connect(
  state => ({
    values: _get(state.store, 'values.list', {}),
    form: _get(state.form, 'maxi', {})
  }))
class Home extends React.Component {

  componentWillMount() {
    // this.props.dispatch(load('values', '/menu', {}));
  }

  render() {

    const disabled = () => {
      if (parseInt(_get(this.props, 'form.values.billing_other', 0), 10) === 1) {
        return false;
      }
      return true;
    };

    return (
      <div>
        <button onClick={() => {
          this.props.dispatch(load('values', '/values', {}));
        }}>
          click
        </button>

        <Form
          locale="en_US"
          name="maxi"
          horizontal
          fields={
            [
              {
                name: 'plain',
                type: 'plain',
                value: '<strong>Factuur gegevens</strong>'
              },
              {
                name: 'order_number',
                label: 'Bestelnummer',
                disabled: () => (true),
                type: 'text',
                labelSize: {md: 4},
                fieldSize: {md: 8},
              },
              {
                name: 'billing_other',
                label: 'Ander adres*',
                type: 'radio',
                options: [
                  {'value': 0, 'desc': 'Nee'},
                  {'value': 1, 'desc': 'Ja'}
                ],
                labelSize: {md: 4},
                fieldSize: {md: 8},
              },
              {
                name: 'billing_email',
                label: 'E-mailadres*',
                disabled: () => { return {
                  field: 'billing_other',
                  value: 0
                }},
                help: 'Waar wilt u uw digitale facturen ontvangen',
                type: 'text',
                labelSize: {md: 4},
                fieldSize: {md: 8},
              },
              {
                name: 'billing_division',
                label: 'Afdeling*',
                type: 'text',
                labelSize: {md: 4},
                fieldSize: {md: 8},
              },
              {
                row: {
                  col: [
                    {
                      md: 4,
                      children: [
                        {
                          name: 'plain',
                          type: 'plain',
                          value: '<div class="pull-right">Adres*</div>'
                        }
                      ]
                    },
                    {
                      md: 6,
                      children: [
                        {
                          name: 'billing_street',
                          type: 'text',
                          placeholder: 'Straatnaam',
                          fieldSize: {md: 12}
                        }
                      ]
                    },
                    {
                      md: 2,
                      children: [
                        {
                          name: 'billing_housenumber',
                          type: 'text',
                          placeholder: 'Huisnummer',
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
                          name: 'plain',
                          type: 'plain',
                          value: '<div class="pull-right">Postcode*</div>'
                        }
                      ]
                    },
                    {
                      md: 2,
                      children: [
                        {
                          name: 'billing_postalcode',
                          type: 'text',
                          placeholder: 'Postcode',
                          fieldSize: {md: 12}
                        }
                      ]
                    },
                    {
                      md: 1,
                      children: [
                        {
                          name: 'plain',
                          type: 'plain',
                          value: '<div class="pull-right">Plaats*</div>'
                        }
                      ]
                    },
                    {
                      md: 5,
                      children: [
                        {
                          name: 'billing_city',
                          type: 'text',
                          placeholder: 'Plaats',
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
                          name: 'plain',
                          type: 'plain',
                          value: '<label class="control-label pull-right">Naam*</label>'
                        }
                      ]
                    },
                    {
                      md: 3,
                      children: [
                        {
                          name: 'firstname',
                          type: 'text',
                          disabled: true,
                          placeholder: 'Voornaam',
                          fieldSize: {md: 12}
                        }
                      ]
                    },
                    {
                      md: 5,
                      children: [
                        {
                          name: 'lastname',
                          type: 'text',
                          disabled: true,
                          placeholder: 'Achternaam',
                          fieldSize: {md: 12}
                        }
                      ]
                    }
                  ]
                }
              },
              {
                name: 'costs',
                type: 'complex',
                label: 'Beschikbare types en prijzen',
                bsSize: 'xsmall',
                panel: {
                  header: 'Header'
                },
                addBtn: {bsStyle: 'success'},
                removeBtn: {
                  bsStyle: 'danger',
                  bsSize: 'xsmall'
                },
                moveBtn: {
                  bsStyle: 'primary',
                  bsSize: 'xsmall'
                },
                labelSize: {md: 4},
                fieldSize: {md: 8},
                collapsed: true,
                children: [
                  {
                    row: {
                      col: [
                        {
                          md: 4,
                          children: [
                            {
                              name: 'valx1',
                              label: 'Prijs eerste periode',
                              type: 'text',
                              bsSize: 'small',
                              placeholder: 'xxx',
                              labelSize: {md: 6},
                              fieldSize: {md: 6}
                            },
                          ]
                        },
                        {
                          md: 4,
                          children: [
                            {
                              name: 'valx2',
                              label: 'Prijs eerste periode',
                              type: 'text',
                              bsSize: 'small',
                              placeholder: 'xxx',
                              labelSize: {md: 6},
                              fieldSize: {md: 6}
                            },
                          ]
                        },
                        {
                          md: 4,
                          children: [
                            {
                              name: 'valx3',
                              label: 'Prijs eerste periode',
                              type: 'text',
                              bsSize: 'small',
                              placeholder: 'xxx',
                              labelSize: {md: 6},
                              fieldSize: {md: 6}
                            },
                          ]
                        },
                        {
                          md: 4,
                          children: [
                            {
                              name: 'valx4',
                              label: 'Prijs eerste periode',
                              type: 'text',
                              bsSize: 'small',
                              placeholder: 'xxx',
                              labelSize: {md: 6},
                              fieldSize: {md: 6}
                            },
                          ]
                        },
                        {
                          md: 4,
                          children: [
                            {
                              name: 'valx5',
                              label: 'Prijs eerste periode',
                              type: 'text',
                              bsSize: 'small',
                              placeholder: 'xxx',
                              labelSize: {md: 6},
                              fieldSize: {md: 6}
                            },
                          ]
                        },
                        {
                          md: 4,
                          children: [
                            {
                              name: 'valx6',
                              label: 'Prijs eerste periode',
                              type: 'text',
                              bsSize: 'small',
                              placeholder: 'xxx',
                              labelSize: {md: 6},
                              fieldSize: {md: 6}
                            },
                          ]
                        }

                      ]
                    }
                  },
                  {
                    name: 'costs2',
                    type: 'complex',
                    label: 'Beschikbare types en prijzen',
                    addBtn: {label: 'Model type toevoegen'},
                    removeBtn: {
                      bsStyle: 'danger',
                      bsSize: 'xsmall'
                    },
                    moveBtn: {
                      bsStyle: 'primary',
                      bsSize: 'xsmall'
                    },
                    labelSize: {md: 4},
                    fieldSize: {md: 8},
                    collapsed: true,
                    children: [
                      {
                        name: 'valx7',
                        label: 'Prijs eerste periode',
                        type: 'text',
                        bsSize: 'small',
                        placeholder: 'xxx',
                        labelSize: {md: 6},
                        fieldSize: {md: 6}
                      }
                    ]
                  }
                ]
              },
              {
                name: 'resource',
                label: 'Resource',
                type: 'resource',
                disabled: true,
                help: 'hoi',
                bsSize: 'large',
                labelSize: {md: 4},
                fieldSize: {md: 8},
                resource: (props) => <TestResource {...props}/>,
                list: [
                  {value: 1, desc: 'Item 1'},
                  {value: 2, desc: 'Item 2'},
                  {value: 3, desc: 'Item 3'},
                ]
              },
              {
                name: 'name',
                bsSize: 'large',
                label: 'Titel',
                disabled: true,
                type: 'text',
                addonBefore: '@',
                addonAfter: '#',
                placeholder: 'Omschrijving',
                labelSize: {md: 4},
                fieldSize: {md: 8},
                buttonBefore: {
                  name: 'room-checkbox-dropdown-append',
                  type: 'dropDown',
                  placeholder: 'Start text',
                  items: [
                    {value: 0, desc: 'Room -1'},
                    {value: 1, desc: 'Kamer 1'},
                    {value: 2, desc: 'Kamer 2'},
                    {value: 3, desc: 'Kamer 3'},
                    {value: 4, desc: 'Kamer 4'}
                  ],
                }
              },
              {
                name: 'password',
                label: 'Wachtwoord',
                type: 'password',
                disabled: true,
                labelSize: {md: 4},
                fieldSize: {md: 8},
                buttonAfter: {
                  type: 'button',
                  value: 'Button after'
                }
              },
              {
                name: 'datetime',
                label: 'DateTime',
                disabled: true,
                type: 'datetime',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'textarea',
                label: 'Textarea',
                disabled: true,
                rows: 10,
                type: 'textarea',
                placeholder: 'Omschrijving',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'rte',
                label: 'TinyMCE',
                rows: 10,
                type: 'rte',
                placeholder: 'TinyMCE',
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'plupload',
                label: 'Bestanden',
                disabled: true,
                type: 'plupload',
                labelSize: {md: 4},
                fieldSize: {md: 8},
                conf: {
                  runtimes: 'html5',
                  url: '/'
                }
              },
              {
                name: 'room',
                label: 'Kamernummer',
                disabled: true,
                help: 'Wel kamernummer heeft u?',
                type: 'select',
                placeholder: 'Omschrijving',
                options: [
                  {value: 1, desc: 'Kamer 1'},
                  {value: 2, desc: 'Kamer 2'},
                  {value: 3, desc: 'Kamer 3'},
                  {value: 4, desc: 'Kamer 4'}
                ],
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'room-radio',
                label: 'Kamernummer',
                help: 'Wel kamernummer heeft u? radio',
                type: 'radio',
                disabled: true,
                filter: true,
                placeholder: 'Omschrijving',
                options: [
                  {value: 1, desc: 'Kamer 1'},
                  {value: 2, desc: 'Kamer 2'},
                  {value: 3, desc: 'Kamer 3'},
                  {value: 4, desc: 'Kamer 4'}
                ],
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'room-checkbox',
                label: 'Kamernummer',
                help: 'Wel kamernummer heeft u?',
                type: 'checkbox',
                disabled: true,
                placeholder: 'Omschrijving',
                filter: true,
                filter_norecords: 'Er zijn geen resultaten',
                filter_placeholder: 'Doorzoek de lijst',
                chunks: 3,
                options: [
                  {value: 0, desc: 'Room -1'},
                  {value: 1, desc: 'Kamer 1'},
                  {value: 2, desc: 'Kamer 2'},
                  {value: 3, desc: 'Kamer 3'},
                  {value: 4, desc: 'Kamer 4'},
                  {value: 10, desc: 'Room -1'},
                  {value: 11, desc: 'Kamer 1'},
                  {value: 12, desc: 'Kamer 2'},
                  {value: 13, desc: 'Kamer 3'},
                  {value: 14, desc: 'Kamer 4'},
                  {value: 20, desc: 'Room -1'},
                  {value: 21, desc: 'Kamer 1'},
                  {value: 22, desc: 'Kamer 2'},
                  {value: 23, desc: 'Kamer 3'},
                  {value: 24, desc: 'Kamer 4'}

                ],
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                name: 'room-checkbox-dropdown',
                label: 'Kamernummer met fout',
                help: 'Wel kamernummer heeft u?',
                type: 'dropDown',
                disabled: true,
                placeholder: 'Start text',
                items: [
                  {value: 0, desc: 'Room -1'},
                  {value: 1, desc: 'Kamer 1'},
                  {value: 2, desc: 'Kamer 2'},
                  {value: 3, desc: 'Kamer 3'},
                  {value: 4, desc: 'Kamer 4'}
                ],
                labelSize: {md: 4},
                fieldSize: {md: 8}
              },
              {
                buttonToolbar: {
                  md: 8,
                  mdOffset: 4,
                  children: [
                    {type: 'submit', name: 'submit', value: 'versturen 1', bsStyle: 'primary'},
                    {type: 'button', name: 'submit', value: 'test 2', onClick: () => {
                        console.log('Button click');
                      }
                    }
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
                        {type: 'success', message: 'Het formulier is opgeslagen'},
                        {type: 'error', message: 'Er zijn fouten opgetreden, controleer het formulier.'}
                      ]
                    }
                  ]
                }
              }
            ]
          }

          initialValues={{
            billing_other: 0,
            plupload: [
              {file_original_name: 'field 1'},
              {file_original_name: 'field 2'},
              {file_original_name: 'field 3'}
            ]
          }}
          validate={(data) => {
            return {
              // 'room-checkbox-dropdown': 'verplicht'
            };
          }}
          onSubmit={(data, dispatch) => {
            const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

            return sleep(3000).then(() => {
              const date = new Date();
              if (date.getTime() % 2 === 1) {
                console.log('Submit failed');
                throw new SubmissionError({billing_email: 'dat klopt niet!'});
              }
            });
          }}
        />
      </div>
    );
  }
}

Home.propTypes = {
  'dispatch': React.PropTypes.func,
  'values': React.PropTypes.object,
  'form': React.PropTypes.object
};
Home.defaultProps = {};

export default Home;
