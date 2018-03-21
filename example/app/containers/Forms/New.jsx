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

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>TEST</h1>
        <FinalFC
          initialValues={{selectbox: 2, dropdown: 3}}
          validate={(values) => {
            console.log('validate');
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
            className={'form-control'}
            hidden={(data) => (data.name === '2')} />
          <Input2 label='Naam 3'
            type={'text'}
            name={'name3'} />

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

          <Radio label='Selectbox'
            name={'radio'}>
            <option value={'1'}>Keuze 1</option>
            <option value={'2'}>Keuze 2</option>
            <option value={'3'}>Keuze 3</option>
          </Radio>

          <Checkbox label='Selectbox'
            name={'checkbox'}>
            <option value={'1'}>Keuze 1</option>
            <option value={'2'}>Keuze 2</option>
            <option value={'3'}>Keuze 3</option>
          </Checkbox>

          <TinyMce name={'tiny'}
            config={{id: 'tiny-1'}} />

          <Plupload
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
