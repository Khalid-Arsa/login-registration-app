import React, { useState } from "react";
import { FormComponent } from "../../../components/FormComponent";
import { Link } from "react-router-dom";
import { TextInputComponent } from "../../../components/TextInputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";
import { handleInputChange } from "../../../utils/helpers";

const Signup: React.FC = () => {
  const [formObject, setFormObject] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    role: "user",
    email: "",
    password: "",
    confirm_password: "",
  });
  // const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("formObject: ", formObject);
  };

  return (
    <React.Fragment>
      <FormComponent handleSubmit={handleSubmit}>
        <h1 className="title">Signup for free</h1>
        <TextInputComponent
          type="text"
          name="first_name"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="First Name"
        />
        <TextInputComponent
          type="text"
          name="last_name"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Last Name"
        />
        <TextInputComponent
          type="text"
          name="address"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Address"
        />
        <TextInputComponent
          type="text"
          name="phone_number"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Phone Number"
        />
        <TextInputComponent
          type="email"
          name="email"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Email Address"
        />
        <TextInputComponent
          type="password"
          name="password"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Password"
        />
        <TextInputComponent
          type="password"
          name="confirm_password"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Password Confirmation"
        />
        <ButtonComponent label="Signup" />
        <p className="message">
          Already Registered? <Link to="/signin">Sign in</Link>
        </p>
      </FormComponent>
    </React.Fragment>
  );
};

export default Signup;
