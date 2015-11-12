#redux-form-generator
Generate forms in your application.

##Installation
````
npm install --save redux-form-generator
````

File uploads are using [react-plupload](https://github.com/lemonCMS/react-plupload)
So if you need file upload please follow the instructions over there for installation

##Example
The is a small example included, this example had no working backend
Use with the chromebrowser, IE will fail in the example.

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
const fields = (token) => {
  return ([
    {
      name: 'picture',
      label: 'Foto',
      type: 'plupload',
      placeholder: 'Bestand',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10',
      url: '/',
      headers: {
        Authorization: 'Bearer ' + token
      },
      multi_selection: false,
      hideOnStatic: true <-- This will hide this element when the form is rendered with the static option
    },
    {
      name: 'initials',
      label: 'Voorletters',
      type: 'text',
      placeholder: 'Voorletters',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    ]);
````

Punt in your react render component the following code

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

#Help wanted
Help wanted to make this package stable!
