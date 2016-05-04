export default function form(resource) {

  return ([
    {
      name: 'field_1',
      label: 'Field 1',
      helper: 'How are you today?',
      type: 'text',
      bsSize: 'large',
      placeholder: 'Field 1',
      addonBefore: '@',
      addonAfter: '@',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      }
    },
    {
      name: 'field_2',
      label: 'Field 2',
      type: 'text',
      bsSize: 'large',
      placeholder: 'Field 2',
      addonBefore: '@',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      buttonAfter: {
        type: 'button',
        value: 'Button after'
      }
    },
    {
      name: 'field_3',
      label: 'Field 3',
      type: 'select',
      bsSize: 'large',
      placeholder: 'Field 3',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      options: [
        {value: '1', desc: 'Value 1'},
        {value: '2', desc: 'Value 2'},
        {value: '3', desc: 'Value 3'},
        {value: '4', desc: 'Value 4'}
      ]
    },
    {
      name: 'field_4',
      label: 'Field 4',
      type: 'radio',
      placeholder: 'Field 4',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      options: [
        {value: 1, desc: 'Value 1'},
        {value: 2, desc: 'Value 2'},
        {value: 3, desc: 'Value 3'},
        {value: 4, desc: 'Value 4'},
        {value: 5, desc: 'Value 5'}
      ],
      chunks: 3,
      searchable: true
    },
    {
      name: 'field_5',
      label: 'Field 5',
      helper: 'How are you today?',
      type: 'textarea',
      placeholder: 'Field 5',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      }
    },
    {
      name: 'field_6',
      label: 'Field 6',
      type: 'checkbox',
      bsSize: 'large',
      placeholder: 'Field 6',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      options: [
        {value: 1, desc: 'Value 1'},
        {value: 2, desc: 'Value 2'},
        {value: 3, desc: 'Value 3'},
        {value: 4, desc: 'Value 4'},
        {value: 5, desc: 'Value 5'}
      ],
      chunks: 3,
      searchable: true
    },
    {
      row: {
        col: [
          {
            md: 10,
            mdOffset: 2,
            children: [
              {type: 'html', message: '<strong>Checkbox without label</strong>'}
            ]
          }
        ]
      }
    },
    {
      name: 'field_6_1',
      type: 'checkbox',
      bsSize: 'large',
      fieldSize: {
        mdOffset: 2,
        md: 10
      },
      options: [
        {value: 1, desc: 'Value 1'},
      ]
    },
    {
      name: 'field_6_2',
      label: 'Field 6.2',
      type: 'checkboxListiOs',
      bsSize: 'large',
      placeholder: 'Field 6',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      options: [
        {value: '1', desc: 'Value 1'},
        {value: '2', desc: 'Value 2'},
        {value: '3', desc: 'Value 3'},
        {value: '4', desc: 'Value 4'},
        {value: '5', desc: 'Value 5'}
      ],
      chunks: 3,
      searchable: true
    },
    {
      name: 'field_7',
      label: 'Field 7',
      type: 'text',
      bsSize: 'large',
      placeholder: 'Field 7',
      buttonAfter: {
        name: 'field_7_1',
        label: 'Field 7_1',
        type: 'dropDown',
        items: [
          {value: '1', desc: 'Value 1'},
          {value: '2', desc: 'Value 2'},
          {value: '3', desc: 'Value 3'}
        ]
      },
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      }
    },
    {
      name: 'field_8',
      label: 'Field 8',
      helper: 'How are you today?',
      type: 'rte',
      placeholder: 'Field 8',
      conf: {
        readonly: true
      },
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      }
    },
    {
      name: 'field_9',
      label: 'Field 9',
      type: 'resource',
      callResource: resource,
      list: [
        {value: 1, desc: 'Item 1'},
        {value: 2, desc: 'Item 2'},
        {value: 3, desc: 'Item 3'}
      ]
    },
    {
      name: 'field_10',
      label: 'Field 10',
      type: 'plupload',
      conf: {
        id: 'plupload',
        runtimes: 'html5',
        multipart: true,
        chunk_size: '1mb',
        url: '/',
        multi_selection: false,
        flash_swf_url: '/plupload-2.1.8/js/Moxie.swf',
        autoUpload: true,
        headers: {Authorization: 'Bearer laravelAutToken'}
      }
    },
    {
      name: 'field_11',
      label: 'Field 11',
      type: 'dateTime',
      placeholder: 'DateTime',
      bsSize: 'large',
      conf: {
        format: 'x',
        inputFormat: 'YYYY-MM-DD'
      },
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      }
    },
    {
      row: {
        hideOnStatic: true,
        col: [
          {
            md: 10, mdOffset: 2, children: [
              {type: 'success', message: 'Het formulier is opgeslagen'},
              {type: 'error', message: 'Er zijn fouten opgetreden, controleer het formulier.'}
            ]
          },
          {hideOnStatic: true, md: 10, mdOffset: 2, children: [{type: 'submit', name: 'submit', value: 'versturen'}]}
        ]
      }
    }
  ]);
}
