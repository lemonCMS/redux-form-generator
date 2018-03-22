import React from 'react';
import FinalFC from '../../components/Form/FinalFormComponents/Form';
import Input from '../../components/Form/FinalFormComponents/Types/Input';
import InputC from '../../components/Form/FinalFormComponents/Components/Input';
import Input2 from '../../components/Form/FinalFormComponents/Bs/Input';
import Select from '../../components/Form/FinalFormComponents/Bs/Select';
import Radio from '../../components/Form/FinalFormComponents/Bs/Radio';
import Checkbox from '../../components/Form/FinalFormComponents/Bs/Checkbox';
import Dropdown from '../../components/Form/FinalFormComponents/Bs/Dropdown';
import TinyMce from '../../components/Form/FinalFormComponents/Bs/TinyMce';
import Plupload from '../../components/Form/FinalFormComponents/Bs/Plupload';
import Resource from '../../components/Form/FinalFormComponents/Bs/Resource';
import Show from '../../components/Form/FinalFormComponents/Bs/Show';
import Complex from '../../components/Form/FinalFormComponents/Bs/Complex';
import TestResource from './TestResource';

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>TEST</h1>
        <FinalFC
          initialValues={{
            selectbox: 2,
            dropdown: 3,
            radio: 3,
            checkbox: [1, 2],
            resource: [1],
            tiny: "<div><h1>Hoi</h1></div>",
            para: [{name3: 'hoi 3'}, {name3: 'hoi 4'}]
          }}
          validate={(values) => {
            console.log('validate', values);
            const errors = [];
            if (!values.name2 || values.name2 !== 'Clown') {
              errors.name2 = 'Name must be \'Clown\'';
            }
            console.log(errors);
            return errors;
          }}
        >
          <h2>HOI</h2>
          <Input label='Naam 1'
            type={'text'}
            name={'name'} />
          <Input2 label='Naam 2'
            type={'text'}
            name={'name2'}
            component={InputC}
            className={'form-control'} />
          <Show show={(data) => (data.name === '2')}>
            <Input2 label='Naam 3'
              type={'text'}
              name={'name3'} />
          </Show>
          <Dropdown label='Dropdown'
            type={'dropdown'}
            name={'dropdown'}>
            <option value={'1'}>Keuze 1</option>
            <option value={'2'}
              selected>Keuze 2
            </option>
            <option value={'3'}>Keuze 3</option>
          </Dropdown>

          <Select label='Selectbox'
            name={'selectbox'}>
            <option value={'1'}>Keuze 1</option>
            <option value={'2'}>Keuze 2</option>
            <option value={'3'}>Keuze 3</option>
          </Select>

          <Radio label='Radio set'
            name={'radio'}>
            <option value={'1'}>Keuze 1</option>
            <option value={'2'}>Keuze 2</option>
            <option value={'3'}>Keuze 3</option>
          </Radio>

          <Checkbox label='Checkbox'
            name={'checkbox'}>
            <option value={'1'}>Keuze 1</option>
            <option value={'2'}>Keuze 2</option>
            <option value={'3'}>Keuze 3</option>
          </Checkbox>

          <TinyMce
            label={'TinyMCE'}
            name={'tiny'}
            config={{id: 'tiny-1'}} />

          <Plupload
            label={'Plupload'}
            name={'plupload'}
            config={{
              id: 'plupload-button',
              runtimes: 'html5',
              multipart: true,
              chunk_size: '1mb',
              url: '/upload',
              multi_selection: true,
              autoUpload: true,
              headers: {
                Authorization: 'Bearer aad your auth key'
              }
            }}
          />

          <Resource
            label={'Resource'}
            help={'Oxie'}
            name={'resource'}
            resource={props => <TestResource {...props} />}
          >
            <option value={1}>Keuze 1</option>
          </Resource>

          <Complex name="complex" label="complex2" render={name => (
            <div>
              <Input2
                label="Complex input"
                type={'text'}
                name={`${name}.name`} />
            </div>
          )} />


          <input type={'submit'}
            className={'btn btn-primary'}
            value={'submit'} />
        </FinalFC>
      </div>
    );
  }
}

New.propTypes = {};
New.defaultProps = {};

export default New;
