import React from "react";

export function FormComponent({ children }: any) {
  return (
    <React.Fragment>
      <div className="signin-signup-form animated fadeInDown">
        <div className="form">
          <form>{children}</form>
        </div>
      </div>
    </React.Fragment>
  );
}
