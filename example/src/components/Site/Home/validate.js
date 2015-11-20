import validator from 'utils/validator';

export default function validate(data) {
  const errors = {};

  if (validator.isNull(data.firstname)) errors.firstname = 'This field is mandatory.';
  if (validator.isNull(data.lastname)) errors.lastname = 'This field is mandatory.';
  if (validator.isNull(data.initials)) errors.initials = 'This field is mandatory.';
  if (validator.isNull(data.resource)) errors.resource = 'This field is mandatory.';
  if (validator.isNull(data.fruits)) errors.fruits = 'This field is mandatory.';
  if (validator.isNull(data.email)) errors.email = 'This field is mandatory.';
  else if (!validator.isEmail(data.email)) errors.email = 'This emailadress is not valid.';
  return errors;
}
