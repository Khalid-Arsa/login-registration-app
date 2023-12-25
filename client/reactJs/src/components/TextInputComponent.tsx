import React from "react";

interface Props {
  type: string;
  placeholder: string;
}

export const TextInputComponent: React.FC<Props> = ({ type, placeholder }) => {
  return (
    <React.Fragment>
      <input type={type} placeholder={placeholder} className="input-text" />
    </React.Fragment>
  );
};
