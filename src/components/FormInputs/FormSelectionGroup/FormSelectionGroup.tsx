
import React from 'react';
import './FormSelectionGroup.css';
import { CheckboxProps, RadioProps } from 'semantic-ui-react';
import { ErrorMessage } from 'formik';
import { CustomMessage, CheckBox, Radio } from '../';

export const FormSelectionGroup = ({ inputs, type, ...props }:
    { name: string }
    & { inputs: Array<{ value: string } & (CheckboxProps | RadioProps)> }
    & { type: 'checkbox' | 'radio' }
) =>
    <>
        {
            inputs.map(el => type === 'checkbox' ?
                <CheckBox key={el.value} label={el.label} name={props.name} value={el.value} />
                :
                <Radio key={el.value} label={el.label} name={props.name} value={el.value} />
            )
        }
        < ErrorMessage name={props.name} component={CustomMessage} />
    </>



export default FormSelectionGroup;
