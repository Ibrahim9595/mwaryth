import { FieldAttributes, FormikProps } from "formik";

export interface  CustomFieldProps{
    field: FieldAttributes<any>;
    form: FormikProps<any>;
}