import React from "react";
import { FormComponent } from "../../../components/FormComponent";
import { Link } from "react-router-dom";
import { TextInputComponent } from "../../../components/TextInputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";

const Signup: React.FC = () => {
  return (
    <React.Fragment>
      <FormComponent>
        <h1 className="title">Signup for free</h1>
        <TextInputComponent placeholder="Full Name" />
        <TextInputComponent type="email" placeholder="Email Address" />
        <TextInputComponent type="password" placeholder="Password" />
        <TextInputComponent type="password" placeholder="Password Confirmation" />
        <ButtonComponent label="Signup"/>
        <p className="message">
          Already Registered? <Link to="/signin">Sign in</Link>
        </p>
      </FormComponent>
    </React.Fragment>
  );
};

export default Signup;
