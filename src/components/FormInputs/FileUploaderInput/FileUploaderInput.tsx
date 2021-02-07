
import React from 'react';
import './FileUploaderInput.css';
import { Field, ErrorMessage, FormikProps } from 'formik';
import { CustomFieldProps, CustomMessage } from '..';
import { FilesUploader, IFilesUploaderProps } from '../FilesUploader/FilesUploader';

interface IFilesUploaderInputProps {
    name: string;
    minCount: number;
    baseUrl: string;
    handleUpload: IFilesUploaderProps['handleUpload'];
}

const setNewFiles = (form: FormikProps<any>, name: string) => (files: string[]) => form.setFieldValue(name, files);

export const FileUploaderInput = (props: IFilesUploaderInputProps) => (
    <Field {...props} component={FilesUploaderComponent} name={props.name} />
);

const FilesUploaderComponent = ({ form, field, ...props }: IFilesUploaderInputProps & CustomFieldProps) => (
    <>
        <FilesUploader
            files={field.value}
            onChange={setNewFiles(form, field.name)}
            {...props}
        />
        <ErrorMessage name={field.name} component={CustomMessage} />
    </>
)
