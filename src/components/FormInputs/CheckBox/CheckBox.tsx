
import React from 'react';
import { Field } from 'formik';
import './CheckBox.css';
import { CheckboxProps, Form } from 'semantic-ui-react';
import { CustomFieldProps } from '../interfaces';

export const CheckBox = (props: CheckboxProps) => (
    <Field {...props} component={CheckBoxComponent} name={props.name} />
);

const CheckBoxComponent = ({ form, field, ...props }: CheckboxProps & CustomFieldProps) => {
    const handleChange = (label: any, target: any) => form.handleChange({ target });
    return (
        <Form.Checkbox
            checked={field.value?.find((el: string) => props.value === el)?.length ? true : false}
            onBlur={form.handleBlur}
            onChange={handleChange}
            name={field.name}
            {...props}
        />
    )
}

