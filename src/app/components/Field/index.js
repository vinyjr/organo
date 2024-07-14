"use client";

import "./campo.css";

const Field = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const whenTyping = (event) => {
    props.changed(event.target.value);
  };

  return (
    <div className={`field field-${props.type}`}>
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.valor}
        onChange={whenTyping}
        required={props.required}
        placeholder={placeholderModified}
      ></input>
    </div>
  );
};

export default Field;
