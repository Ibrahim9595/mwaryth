import React from "react";
import { CustomFormWrapper, Input } from "../components/FormInputs";
import { Form } from "semantic-ui-react";
import { Field, FieldProps } from "formik";
import { useTranslation } from "react-i18next";

export const SigninForm = ({ handleSubmit }: any) => {
  const { i18n } = useTranslation();
  return (
    <CustomFormWrapper
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <Input
        name="email"
        type="email"
        placeholder={i18n.t("EMAIL_PLACEHOLDER")}
        label={i18n.t("EMAIL")}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder={i18n.t("PASSWORD_PLACEHOLDER")}
        label={i18n.t("PASSWORD")}
        required
      />

      <Field
        component={({ form }: FieldProps) => (
          <Form.Button
            fluid
            type="submit"
            content={i18n.t("SIGNIN")}
            primary
            loading={form.isSubmitting}
            disabled={!form.dirty || form.isSubmitting || !form.isValid}
          />
        )}
      />
    </CustomFormWrapper>
  );
};
