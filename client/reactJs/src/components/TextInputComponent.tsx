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
  errors,
}) => {
  return (
    <React.Fragment>
      <div className="input-group">
        <input
          type={type}
          name={name}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="input-text"
        />
        {errors?.length > 0 && (
          <span className="input-error-message">
            {errors}
          </span>
        )}
      </div>
    </React.Fragment>
  );
};
