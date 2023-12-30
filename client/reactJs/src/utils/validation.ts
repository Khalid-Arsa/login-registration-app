export const authValidation = (obj: any, setState: any) => {
  const first_name =
    obj.first_name.length > 0 ? "" : "Please enter your first name";
  const last_name =
    obj.last_name.length > 0 ? "" : "Please enter your last name";
  const address = obj.address.length > 0 ? "" : "Please enter your address";
  const phone_number =
    obj.phone_number.length > 0 ? "" : "Please enter your phone number";
  const email = obj.email.length > 0 ? "" : "Please enter your email";
  const password = obj.password.length > 0 ? "" : "Please enter your password";
  const confirm_password =
    obj.confirm_password.length > 0 ? "" : "Please enter your confirm password";
  setState({
    first_name: first_name,
    last_name: last_name,
    address: address,
    phone_number: phone_number,
    email: email,
    password: password,
    confirm_password: confirm_password,
  });
};
