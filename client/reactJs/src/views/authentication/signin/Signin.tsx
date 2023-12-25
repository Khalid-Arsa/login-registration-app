import React from "react";
import { Link } from "react-router-dom";
import { FormComponent } from "../../../components/FormComponent";

function Signin() {
  return (
    <React.Fragment>
      <FormComponent>
        <h1 className="title">Signin into your account</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn btn-block">Login</button>
        <p className="message">
          Not Registered? <Link to="#">Create an account</Link>
        </p>
      </FormComponent>
    </React.Fragment>
  );
}

export default Signin;
