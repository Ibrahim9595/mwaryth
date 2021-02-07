import React from "react";
import { Field, ErrorMessage, FormikProps } from "formik";
import { CustomFieldProps, CustomMessage } from "..";
import { SingleImageUploader } from "../SingleImageUploader/SingleImageUploader";

interface ISingleImageUploadInputInputProps {
  name: string;
  handleUpload: (file: File) => Promise<any>;
}
const setNewUrl = (form: FormikProps<any>, name: string) => (url: string) =>
  form.setFieldValue(name, url);

export const SingleImageUploadInput = (
  props: ISingleImageUploadInputInputProps
) => <Field {...props} component={SingleImageUpload} name={props.name} />;

const SingleImageUpload = ({
  form,
  field,
  ...props
}: ISingleImageUploadInputInputProps & CustomFieldProps) => (
  <>
    <SingleImageUploader
      {...props}
      onChange={setNewUrl(form, field.name)}
      url={field.value}
    />
    <ErrorMessage name={field.name} component={CustomMessage} />
  </>
);
