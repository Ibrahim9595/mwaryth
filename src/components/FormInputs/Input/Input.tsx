import React from "react";
import { Field, ErrorMessage } from "formik";
import "./Input.css";
import { InputProps, Form } from "semantic-ui-react";
import { CustomMessage } from "../";
import { CustomFieldProps } from "../interfaces";

export const Input = (props: InputProps) => (
  <Field {...props} component={InputComponent} name={props.name} />
);

const InputComponent = ({
  form,
  field,
  ...props
}: InputProps & CustomFieldProps) => {
  return (
    <>
      <Form.Input
        error={form.errors[field.name] && form.touched[field.name]}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        name={field.name}
        value={field.value}
        {...props}
      />
      <ErrorMessage name={field.name} component={CustomMessage} />
    </>
  );
};
