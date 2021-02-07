
import React from 'react';
import './Fab.css';
import { Button, ButtonProps } from 'semantic-ui-react';

const Fab = (props: ButtonProps) => (
    <div className="fab-container">
        <Button className="fab" circular {...props} />
    </div>
);

export default Fab;
