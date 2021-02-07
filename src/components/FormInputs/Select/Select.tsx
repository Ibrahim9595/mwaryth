import React from "react";
import { Field, ErrorMessage } from "formik";
import "./Select.css";
import { SelectProps, Form } from "semantic-ui-react";
import { CustomMessage, CustomFieldProps } from "../";

export const Select = (props: SelectProps) => (
  <Field {...props} component={SelectComponent} name={props.name} />
);

export const SelectComponent = ({
  form,
  field,
  ...props
}: SelectProps & CustomFieldProps) => {
  const handleChange = (label: any, target: any) => {
    form.setFieldValue(field.name, target.value);
  };
  const handleBlur = (label: any, target: any) => form.handleBlur({ target });
  return (
    <>
      <label>{props.placeholder}</label>
      <Form.Select
        value={form.values[field.name]}
        error={form.errors[field.name] && form.touched[field.name]}
        onChange={handleChange}
        name={field.name}
        onBlur={handleBlur}
        clearable
        lazyLoad
        {...props}
      />
      <ErrorMessage name={field.name} component={CustomMessage} />
    </>
  );
};
