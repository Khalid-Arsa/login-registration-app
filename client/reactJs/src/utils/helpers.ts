import React from "react";

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setState: React.Dispatch<React.SetStateAction<any>>,
  object: Object
) => {
  setState({ ...object, [event.target.name]: event.target.value });
};
