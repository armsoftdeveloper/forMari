import { ErrorMessage, Field } from "formik";
import React from "react";

export default function input({ name, label }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br></br>
      <Field type={name} id={name} name={name} />

      <ErrorMessage name={name}>
        {(errorMessage) => <p className="error">{errorMessage}</p>}
      </ErrorMessage>
    </div>
  );
}
