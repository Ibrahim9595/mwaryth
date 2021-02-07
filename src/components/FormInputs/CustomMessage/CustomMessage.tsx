
import React from 'react';
import './CustomMessage.css';
import { Message } from 'semantic-ui-react';

export const CustomMessage = (props: any) => (
    <Message negative content={props.children} />
);