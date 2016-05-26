#redux-form-generator
Generate forms in your application.

#Warning
Breaking changes

##0.0x Release for use with react-bootstrap <= 0.28.x

##0.1.x Release from use with react-bootstrap >=0.29.x



##Installation
````
npm install --save redux-form-generator
````

File uploads are using [react-plupload](https://github.com/lemonCMS/react-plupload)
So if you need file upload please follow the instructions over there for installation

##Example
The is a small example included, this example had no working backend
Use with the chromebrowser, IE will fail in the example.

[online](http://redux-form-generator.babyblox.nl)


````
git clone https://github.com/lemonCMS/redux-form-generator.git
cd redux-form-generator/example
npm install
npm run dev
````


##Usage

Define a const field function, later on in your component you call this function and you can pass extra params you can use in the fields definition. 
Like i needed my authorization token for the use with plupload.

````javascript
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
    }]
  );
}
````

Put in your react render component the following code

````jsx
<DynamicForm
	checkKey={'userEdit'} <-- Very important, this needs to be a unique and always the same
	formName="userEdit" <-- Name of your store 
	formKey="formkey" <-- (optional) redux formKey fort multiple forms
	formClass="form-horizontal" <-- Bootstrap className 
	fieldsNeeded={fields()} <-- The field const function
	static <-- Then shows the with FormControls.Static from react-bootstrap
	initialValues={{}} <-- Pass the initial values from your store 
	onSubmit={this.handleSubmit} <-- The submit function in your component to handle submit
	getActionState={this.getActionState} <-- (optional) Used to check the state of your reducer
	clearActionState={this.clearActionState} <-- (optional) Clear the action state before submitting
/>
````

#Available types

##Button
````js
{
    type: 'button',
    name: 'button',
    value: 'Button',
    onClick: () => {
      console.log('You clicked me');
    }
}
````

##Submit
````js
{
    type: 'submit',
    name: 'submit',
    value: 'Send'
}
````

##Text
````js
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
}
````

##Password
````js
{
    name: 'field_1',
    label: 'Field 1',
    type: 'password',
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
}
````

##Select
````js
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
}
````

##Radio
````js
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
}
````
##Checkbox
````js
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
}
````

##CheckboxiOs
````js
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
}
````

##Textarea
````js
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
}
````

##Rte
Tinymce editor, so for configuration options [tinymce](http://tinymce.com)
````js
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
}
````

##Input with dropdown
````js
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
}
````

##Resource
Load data from overlay with its own store. See the example on how to implement
````js
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
}
````
##Plupload
Upload files with plupload
See for more configuration options [plupload](http://www.plupload.com)
````js
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
}
````

##DateTime
See for more configuration options [plupload](https://github.com/quri/react-bootstrap-datetimepicker)
````js
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
}
````

#Success
Show this message when the form has been succesfully send.
````js
{
  type: 'success',
  message: 'The form has been send'
},
````

#Error
Show this message when there are errors
````js
{
  type: 'error',
  message: 'There are errors, please check the form.'
},
````

##Misc
Howto on how to implement your submit button and messages
````js
{
      row: {
        hideOnStatic: true,
        col: [
          {
            md: 10, mdOffset: 2, children: [
              {type: 'success', message: 'The form has been send'},
              {type: 'error', message: 'There are errors, please the the form.'}
            ]
          },
          {hideOnStatic: true, md: 10, mdOffset: 2, children: [{type: 'submit', name: 'submit', value: 'versturen'}]}
        ]
      }
    }
````

#Dependecies
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [react-bootstrap-datetimepicker](https://github.com/quri/react-bootstrap-datetimepicker)
- [react-tinymce](https://github.com/instructure-react/react-tinymce)
- [react-plupload](https://www.npmjs.com/package/react-plupload)

#Help wanted
Help wanted to make this package stable!


###PM2
Go into the example directory.
and run
````
pm2 start "/usr/bin/npm" -f --name "app-redux-form-generator" -- run start
````