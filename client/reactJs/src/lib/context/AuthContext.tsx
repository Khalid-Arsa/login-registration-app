import { createContext, useContext, useState } from "react";
import axiosClient from "../../utils/api";

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
    confirm_password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axiosClient.post("/auth/signup", formObject)
    .then((data: any) => {
      console.log(data)
    })
    .catch((err) => console.log(err))
  };
  
  return <AuthContext.Provider value={{ formObject, setFormObject, handleSubmit }}>{children}</AuthContext.Provider>
}

export const useAuthState = () => useContext(AuthContext);
