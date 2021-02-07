import React from "react";
import {
  CustomFormWrapper,
  Input,
  FormSelectionGroup,
} from "../components/FormInputs";
import { Checkbox, Form } from "semantic-ui-react";
import { Field, FieldProps } from "formik";
import { useTranslation } from "react-i18next";

export const NewNodeForm = ({ data, handleSubmit }: any) => {
  const { i18n } = useTranslation();

  return (
    <CustomFormWrapper
      onSubmit={handleSubmit}
      initialValues={{
        name: data?.name || "",
        wealth: data?.wealth || 0,
        gender: data?.gender || "",
        isAlive: data?.isAlive || false,
      }}
    >
      <Input
        name="name"
        type="text"
        placeholder={i18n.t("NAME_PLACEHOLDER")}
        label={i18n.t("NAME_LABEL")}
        required
      />

      <Input
        name="wealth"
        type="number"
        min={0}
        placeholder={i18n.t("WEALTH_PLACEHOLDER")}
        label={i18n.t("WEALTH_LABEL")}
        required
      />

      <h3>
        {i18n.t("GENDER")} <span style={{ color: "red" }}>*</span>
      </h3>
      <FormSelectionGroup
        name="gender"
        type="radio"
        inputs={["male", "female"].map((gender) => ({
          value: gender,
          label: i18n.t(`GENDER_${gender.toUpperCase()}`),
        }))}
      ></FormSelectionGroup>
      <div style={{marginBlock: "15px"}}>
        <Checkbox name="isAlive" toggle label={i18n.t("IS_ALIVE")} />
      </div>
      <Field
        component={({ form }: FieldProps) => (
          <Form.Button
            fluid
            type="submit"
            content={i18n.t("SAVE")}
            primary
            loading={form.isSubmitting}
            disabled={!form.dirty || form.isSubmitting || !form.isValid}
          />
        )}
      />
    </CustomFormWrapper>
  );
};
