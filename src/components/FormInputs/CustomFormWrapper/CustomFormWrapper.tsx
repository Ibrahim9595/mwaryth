import React from "react";
import "./CustomFormWrapper.css";
import { Formik, FormikConfig } from "formik";
import { Form } from "semantic-ui-react";

export function CustomFormWrapper<T>(props: FormikConfig<T>) {
  return (
    <Formik {...props}>
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          {typeof props.children === "function"
            ? props.children(formik)
            : props.children}
        </Form>
      )}
    </Formik>
  );
}
