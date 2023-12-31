import { createContext, useContext, useState } from "react";
import axiosClient from "../../utils/api";
import { SignupSchema } from "../../utils/validation";

export const AuthContext: any = createContext({
  formObject: {},
  setFormObject: () => {},
  handleSubmit: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
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
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await SignupSchema.validate(formObject, { abortEarly: false });
      // Validation successful, handle form submission logic here
      console.log("Form submitted:", formObject);
    } catch (err: any) {
      // Validation failed, update errors state
      const newErrors: any = {};
      err.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <AuthContext.Provider
      value={{ formObject, errors, setFormObject, handleSubmit }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthContext);
