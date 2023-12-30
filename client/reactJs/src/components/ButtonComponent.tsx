import React from "react";

type ButtonType = "submit" | "reset" | "button";

export const ButtonComponent: React.FC<{
  label: string;
  type: ButtonType;
}> = ({ label, type }) => {
  return (
    <React.Fragment>
      <button type={type} className="btn btn-block">{label}</button>
    </React.Fragment>
  );
};
