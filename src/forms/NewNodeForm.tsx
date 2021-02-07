import React from "react";
import {
  CustomFormWrapper,
  Input,
  FormSelectionGroup,
  CheckBox,
  Select,
} from "../components/FormInputs";
import { Form } from "semantic-ui-react";
import { Field, FieldProps } from "formik";
import { useTranslation } from "react-i18next";

export interface IFormData {
  id?: string | number;
  name?: string;
  wealth?: number;
  gender?: string;
  isAlive?: boolean;
  married?: boolean;
  relation?: string;
}

const validate = (data: IFormData) => {
  return {};
};

export const NewNodeForm = ({
  data,
  handleSubmit,
  addNode,
}: {
  data: IFormData;
  handleSubmit: (data: IFormData) => any;
  addNode: (data: { relation: string; id: string }) => any;
}) => {
  const { i18n } = useTranslation();
  console.log(data.id);

  return (
    <CustomFormWrapper
      onSubmit={(data, { resetForm }) => {
        handleSubmit(data);
        resetForm();
      }}
      validate={validate}
      validateOnBlur={true}
      initialValues={{
        id: data?.id || 0,
        name: data?.name || "",
        wealth: data?.wealth || 0,
        gender: data?.gender || "",
        isAlive: data?.isAlive || false,
        // married: data?.married || false,
        relation: data?.relation || undefined,
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
      {/* <div style={{ marginBlock: "15px" }}>
        <CheckBox name="married" toggle label={i18n.t("MARRIED")} />
      </div> */}

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

      <hr />
      <p>Choose relation type to add new node</p>
      <Select
        required
        search
        selection
        clearable
        name="relation"
        options={["mother", "father", "child", "partner"].map((role) => ({
          value: role,
          text: role,
          key: role,
        }))}
        placeholder={i18n.t("SELECT_RELATION")}
      />
      <Field
        component={({ form }: FieldProps) => (
          <Form.Button
            fluid
            type="button"
            onClick={() => {
              console.log(form.values);
              addNode({ relation: form.values.relation, id: form.values.id });
            }}
            content={i18n.t("SAVE")}
            primary
            disabled={!form.values.relation}
          />
        )}
      />
    </CustomFormWrapper>
  );
};
