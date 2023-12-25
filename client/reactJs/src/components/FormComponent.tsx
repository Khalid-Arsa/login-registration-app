import React from "react";

export const FormComponent: React.FC<{ children: any }> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="signin-signup-form animated fadeInDown">
        <div className="form">
          <form>{children}</form>
        </div>
      </div>
    </React.Fragment>
  );
};
