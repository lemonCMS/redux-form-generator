const validator = require('validator');
validator.isPassword = (str) => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(str);
};

validator.isPhoneNumber = (str) => {
  const re = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
  return re.test(str);
};

export default validator;

export const VALIDATE_ERROR_MANDATORY = 'Dit veld is verplicht';
export const VALIDATE_ERROR_EMAIL = 'Voer een geldig e-mailadres in';
export const VALIDATE_ERROR_PHONENUMBER = 'Voer een geldig telefoonnummer in';
