import React from "react";
import { Link } from "react-router-dom";
import { FormComponent } from "../../../components/FormComponent";
import { TextInput } from "../../../components/TextInputComponent";

function Signin() {
  return (
    <React.Fragment>
      <FormComponent>
        <h1 className="title">Signin into your account</h1>
        <TextInput type="email" placeholder="Email" />
        <TextInput type="password" placeholder="Password" />
        <button className="btn btn-block">Login</button>
        <p className="message">
          Not Registered? <Link to="#">Create an account</Link>
        </p>
      </FormComponent>
    </React.Fragment>
  );
}

export default Signin;
