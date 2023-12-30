import { createContext, useContext, useState } from "react";
import axiosClient from "../../utils/api";
import { authValidation } from "../../utils/validation";

export const AuthContext: any = createContext({
  formObject: {},
  setFormObject: () => {},
  handleSubmit: () => {}
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
    confirm_password: ""
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    role: "user",
    email: "",
    password: "",
    confirm_password: ""
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    authValidation(formObject, setErrors)
    // axiosClient.post("/auth/signup", formObject)
    // .then((data: any) => {
    //   console.log(data)
    // })
    // .catch((err) => console.log(err))
  };

  return <AuthContext.Provider value={{ formObject, errors, setFormObject, handleSubmit }}>{children}</AuthContext.Provider>
}

export const useAuthState = () => useContext(AuthContext);
