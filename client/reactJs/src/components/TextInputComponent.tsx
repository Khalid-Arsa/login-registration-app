import React from "react";

interface Props {
  type: string,
  placeholder: string
}

export function TextInput({
  type,
  placeholder
}: Props) {

  return (
    <React.Fragment>
      <input 
        type={type}
        placeholder={placeholder}
        className="input-text"
      />
    </React.Fragment>
  )
}