import React from "react";
import { Link } from "react-router-dom";
import { FormComponent } from "../../../components/FormComponent";
import { TextInputComponent } from "../../../components/TextInputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";

const Signin: React.FC = () => {
  return (
    <React.Fragment>
      <FormComponent>
        <h1 className="title">Signin into your account</h1>
        <TextInputComponent type="email" placeholder="Email" />
        <TextInputComponent type="password" placeholder="Password" />
        <ButtonComponent type="submit" label="Login" />
        <p className="message">
          Not Registered? <Link to="/signup">Create an account</Link>
        </p>
      </FormComponent>
    </React.Fragment>
  );
};

export default Signin;
