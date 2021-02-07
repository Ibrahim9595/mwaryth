import React from "react";
import {
  CustomFormWrapper,
  Input,
  FormSelectionGroup,
  CheckBox,
} from "../components/FormInputs";
import { Form } from "semantic-ui-react";
import { Field, FieldProps } from "formik";
import { useTranslation } from "react-i18next";

interface FormData {
  name?: string;
  wealth?: number;
  gender?: "male" | "female" | "";
  isAlive?: boolean;
  married?: boolean;
}

const validate = (data: FormData) => {
  console.log(data);
  return {};
};

export const NewNodeForm = ({
  data,
  handleSubmit,
}: {
  data: FormData;
  handleSubmit: (data: FormData) => any;
}) => {
  const { i18n } = useTranslation();

  return (
    <CustomFormWrapper
      onSubmit={(data, { resetForm }) => {
        handleSubmit(data);
        resetForm();
      }}
      validate={validate}
      validateOnBlur={true}
      initialValues={{
        name: data?.name || "",
        wealth: data?.wealth || 0,
        gender: data?.gender || "",
        isAlive: data?.isAlive || false,
        married: data?.married || false,
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
        icon="dollar sign"
        iconPosition="left"
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
      <div style={{ marginBlock: "15px" }}>
        <CheckBox name="isAlive" toggle label={i18n.t("IS_ALIVE")} />
      </div>
      <div style={{ marginBlock: "15px" }}>
        <CheckBox name="married" toggle label={i18n.t("MARRIED")} />
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
