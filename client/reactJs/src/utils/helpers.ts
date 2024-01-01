import React from "react";

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setState: React.Dispatch<React.SetStateAction<any>>,
  object: Object
) => {
  setState({ ...object, [event.target.name]: event.target.value });
};

export const setTimeMessage = (message: any, setState: any) => {
  setState(message);

  setTimeout(() => {
    setState({});
  }, 5000);
};
