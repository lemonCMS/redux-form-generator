import React from 'react';

export default ({input, field}) => {
  const {className} = field;
  return (
    <input type={field.type} {...input} className={className} />
  );
}
