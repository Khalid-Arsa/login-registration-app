import { createContext, useContext, useState } from "react";
import axiosClient from "../../utils/api";
import { SigninSchema } from "../../utils/validation";
import { setTimeMessage } from "../../utils/helpers";

export const AuthContext: any = createContext({
  formObject: {},
  setFormObject: () => {},
  handleSubmit: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [formObject, setFormObject] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await SigninSchema.validate(formObject, { abortEarly: false });
      // Validation successful, handle form submission logic here
      console.log("Form submitted:", formObject);
    } catch (err: any) {
      // Validation failed, update errors state
      const newErrors: any = {};
      err.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setTimeMessage(newErrors, setErrors);
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
