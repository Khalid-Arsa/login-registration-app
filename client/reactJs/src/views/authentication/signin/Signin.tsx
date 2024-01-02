import React from "react";
import { Link } from "react-router-dom";
import { FormComponent } from "../../../components/FormComponent";
import { TextInputComponent } from "../../../components/TextInputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";
import { useAuthState } from "../../../lib/context/AuthContext";
import { handleInputChange } from "../../../utils/helpers";

const Signin: React.FC = () => {
  const { formObject, errors, setErrors, setFormObject, handleSubmit }: any =
    useAuthState();
    
  return (
    <React.Fragment>
      <FormComponent handleSubmit={handleSubmit}>
        <h1 className="title">Signin into your account</h1>
        {typeof errors === "string" && (
          <div className="alert">
            <p>{errors}</p>
          </div>
        )}
        <TextInputComponent
          type="email"
          name="email"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Email Address"
          errors={errors?.email}
        />
        <TextInputComponent
          type="password"
          name="password"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Password"
          errors={errors?.password}
        />
        <ButtonComponent type="submit" label="Login" />
        <p className="message" onClick={() => setErrors({})}>
          Not Registered? <Link to="/signup">Create an account</Link>
        </p>
      </FormComponent>
    </React.Fragment>
  );
};

export default Signin;
