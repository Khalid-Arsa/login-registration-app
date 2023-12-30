import React from "react";
import { FormComponent } from "../../../components/FormComponent";
import { Link } from "react-router-dom";
import { TextInputComponent } from "../../../components/TextInputComponent";
import { ButtonComponent } from "../../../components/ButtonComponent";
import { handleInputChange } from "../../../utils/helpers";
import { useAuthState } from "../../../lib/context/AuthContext";

const Signup: React.FC = () => {
  const { formObject, errors, setFormObject, handleSubmit }: any = useAuthState();

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
          errors={errors.first_name}
        />
        <TextInputComponent
          type="text"
          name="last_name"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Last Name"
          errors={errors.last_name}
        />
        <TextInputComponent
          type="text"
          name="address"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Address"
          errors={errors.address}
        />
        <TextInputComponent
          type="text"
          name="phone_number"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Phone Number"
          errors={errors.phone_number}
        />
        <TextInputComponent
          type="email"
          name="email"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Email Address"
          errors={errors.email}
        />
        <TextInputComponent
          type="password"
          name="password"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Password"
          errors={errors.password}
        />
        <TextInputComponent
          type="password"
          name="confirm_password"
          handleInputChange={(e: any) =>
            handleInputChange(e, setFormObject, formObject)
          }
          placeholder="Password Confirmation"
          errors={errors.confirm_password}
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
