import React from "react";

interface Props {
  type?: string;
  placeholder: string;
  name: string;
  handleInputChange: any;
  errors: any;
  value: any;
}

export const TextInputComponent: React.FC<Props> = ({
  type,
  placeholder,
  name,
  handleInputChange,
  errors,
  value
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="input-text"
      />
      <p>{errors}</p>
    </React.Fragment>
  );
};
