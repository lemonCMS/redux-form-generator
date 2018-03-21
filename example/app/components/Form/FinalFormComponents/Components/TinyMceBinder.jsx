import React from 'react';
import TinyMceInput from './TinyMceInput';

export default ({input, field}) => {
  const {className, config} = field;
  return (
    <TinyMceInput {...input} className={className} tinymceConfig={config} />
  );
}
