import React from "react";

export const ButtonComponent: React.FC<{
  label: string;
}> = ({ label }) => {
  return (
    <React.Fragment>
      <button className="btn btn-block">{label}</button>
    </React.Fragment>
  );
};
