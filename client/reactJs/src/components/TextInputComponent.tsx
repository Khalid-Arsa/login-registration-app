import React from "react";

interface Props {
  type?: string;
  placeholder: string;
  name: string;
  handleInputChange: any;
}

export const TextInputComponent: React.FC<Props> = ({
  type,
  placeholder,
  name,
  handleInputChange,
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
    </React.Fragment>
  );
};
