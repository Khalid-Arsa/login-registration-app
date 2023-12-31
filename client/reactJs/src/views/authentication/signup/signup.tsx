import React from "react";
import { FormComponent } from "../../../components/FormComponent";
import { Link } from "react-router-dom";
import { TextInputComponent } from "../../../components/TextInputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";
import { handleInputChange } from "../../../utils/helpers";
import { useAuthState } from "../../../lib/context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup: React.FC = () => {
  const { formObject, setFormObject }: any = useAuthState();

  const SignupSchema = Yup.object().shape({
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
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string().required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      address: "",
      phone_number: "",
      role: "user",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      console.log("values: ", values);
    },
  });

  const { handleSubmit, errors } = formik;

  return (
    <React.Fragment>
      <FormComponent handleSubmit={handleSubmit}>
        <h1 className="title">Signup for free</h1>
        <TextInputComponent
          type="text"
          name="first_name"
          handleInputChange={formik.handleChange}
          placeholder="First Name"
          errors={errors.first_name}
          value={formik.values.first_name}
        />
        <TextInputComponent
          type="text"
          name="last_name"
          handleInputChange={formik.handleChange}
          placeholder="Last Name"
          errors={errors.last_name}
          value={formik.values.last_name}
        />
        <TextInputComponent
          type="text"
          name="address"
          handleInputChange={formik.handleChange}
          placeholder="Address"
          errors={errors.address}
          value={formik.values.address}
        />
        <TextInputComponent
          type="text"
          name="phone_number"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Phone Number"
          errors={errors.phone_number}
          value={formik.values.phone_number}
        />
        <TextInputComponent
          type="email"
          name="email"
          handleInputChange={formik.handleChange}
          placeholder="Email Address"
          errors={errors.email}
          value={formik.values.email}
        />
        <TextInputComponent
          type="password"
          name="password"
          handleInputChange={formik.handleChange}
          placeholder="Password"
          errors={errors.password}
          value={formik.values.password}
        />
        <TextInputComponent
          type="password"
          name="confirm_password"
          handleInputChange={formik.handleChange}
          placeholder="Password Confirmation"
          errors={errors.confirm_password}
          value={formik.values.confirm_password}
        />
        <ButtonComponent type="submit" label="Signup" />
        <p className="message">
          Already Registered? <Link to="/signin">Sign in</Link>
        </p>
      </FormComponent>
    </React.Fragment>
  );
};

export default Signup;
