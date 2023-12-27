import React from "react";

export const FormComponent: React.FC<{
  children: any;
  handleSubmit: (e: any) => void;
}> = ({ children, handleSubmit }) => {
  return (
    <React.Fragment>
      <div className="signin-signup-form animated fadeInDown">
        <div className="form">
          <form onSubmit={handleSubmit}>{children}</form>
        </div>
      </div>
    </React.Fragment>
  );
};
