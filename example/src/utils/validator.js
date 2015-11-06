const validator = require('validator');
validator.extend('isPassword', (str) => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  return re.test(str);
});
export default validator;
