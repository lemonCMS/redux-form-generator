import validator from 'utils/validator';

export default function validate(data) {
  const errors = {};
  if (!data.field_1 || validator.isNull(data.field_1)) errors.field_1 = 'This field is mandatory.';
  return errors;
}
