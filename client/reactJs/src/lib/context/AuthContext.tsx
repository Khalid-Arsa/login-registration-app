import { createContext, useContext } from "react";
import axiosClient from "../../utils/api";

export const AuthContext: any = createContext({
  handleSubmit: () => {}
});

export const AuthContextProvider = ({ children }: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // axiosClient.post("/auth/signup", formObject)
    // .then((data: any) => {
    //   console.log(data)
    // })
    // .catch((err) => console.log(err))
  };

  return <AuthContext.Provider value={{ handleSubmit }}>{children}</AuthContext.Provider>
}

export const useAuthState = () => useContext(AuthContext);
