import React from "react";
import { Field } from "formik";
import "./Radio.css";
import { RadioProps, Form } from "semantic-ui-react";
import { CustomFieldProps } from "../interfaces";

export const Radio = (props: RadioProps) => (
  <Field {...props} component={RadioComponent} name={props.name} />
);

const RadioComponent = ({
  form,
  field,
  ...props
}: RadioProps & CustomFieldProps) => {
  const handleChange = (label: any, target: any) =>
    form.handleChange({ target });
  return (
    <Form.Radio
      checked={field.value === props.value}
      onChange={handleChange}
      name={field.name}
      onBlur={form.handleBlur}
      {...props}
    />
  );
};
