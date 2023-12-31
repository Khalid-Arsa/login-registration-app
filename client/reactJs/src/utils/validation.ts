import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name required"),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name required"),
  address: Yup.string().required("Address required"),
  phone_number: Yup.string().required("Phone number required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
  confirm_password: Yup.string().min(8).required("Confirm password is required"),
});
