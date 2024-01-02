import { createContext, useContext, useState } from "react";
import axiosClient from "../../utils/api";
import { SigninSchema } from "../../utils/validation";

export const AuthContext: any = createContext({
  formObject: {},
  errors: {},
  setErrors: () => {},
  setFormObject: () => {},
  handleSubmit: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
  const [formObject, setFormObject] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await SigninSchema.validate(formObject, { abortEarly: false });
      // Validation successful, handle form submission logic here
      axiosClient
        .post("/auth/signin", formObject)
        .then(({ data }) => {
          console.log("Data: ", data);
        })
        .catch((err: any) => {
          setErrors(err.response.data.message);
        });
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
      value={{ formObject, errors, setErrors, setFormObject, handleSubmit }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthContext);
