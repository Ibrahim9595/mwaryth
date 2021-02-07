
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './TextArea.css';
import { TextAreaProps, Form } from 'semantic-ui-react';
import { CustomFieldProps, CustomMessage } from '../';

export const TextArea = (props: TextAreaProps) => (
    <Field {...props} component={TextAreaComponent} name={props.name} />
);

const TextAreaComponent = ({ form, field, ...props }: TextAreaProps & CustomFieldProps) => {
    return (
        <>
            <Form.TextArea
                value={field.value}
                error={form.errors[field.name] && form.touched[field.name]}
                onChange={form.handleChange}
                name={field.name}
                onBlur={form.handleBlur}
                {...props}
            />
            <ErrorMessage name={field.name} component={CustomMessage} />
        </>
    )
}
