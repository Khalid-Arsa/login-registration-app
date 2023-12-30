import React from "react";

interface Props {
  type?: string;
  placeholder: string;
  name: string;
  handleInputChange: any;
  errors: any;
}

export const TextInputComponent: React.FC<Props> = ({
  type,
  placeholder,
  name,
  handleInputChange,
  errors
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        name={name}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input-text"
      />
      <p>{errors}</p>
    </React.Fragment>
  );
};
