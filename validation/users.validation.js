const isEmpty = require("./isEmpty");
const validator = require("validator");
module.exports = function validateUser(data) {
  let errors = {};
  data.UserEmail = !isEmpty(data.UserEmail) ? data.UserEmail : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.Age = !isEmpty(data.Age) ? data.Age : "";

  if (!validator.isEmail(data.UserEmail)) {
    errors.UserEmail = "format email required";
  }
  if (validator.isEmpty(data.UserEmail)) {
    errors.UserEmail = "Required email";
  }
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "Required lastName";
  }
  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "Required firstName";
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "Required Age";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
