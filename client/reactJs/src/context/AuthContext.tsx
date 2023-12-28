import { createContext, useContext, useState } from "react";

export const AuthContext: any = createContext({
  formObject: {},
  setFormObject: () => {}
});

export const authState = () => {
  let context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("authState must used with in Auth Context Provider");
  }

  return context;
};

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
  
  return <AuthContext.Provider value={{ formObject, setFormObject }}>{children}</AuthContext.Provider>
}
