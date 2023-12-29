import { createContext, useContext, useState } from "react";

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

    console.log("formObject: ", formObject);
  };
  
  return <AuthContext.Provider value={{ formObject, setFormObject, handleSubmit }}>{children}</AuthContext.Provider>
}

export const useAuthState = () => useContext(AuthContext);
