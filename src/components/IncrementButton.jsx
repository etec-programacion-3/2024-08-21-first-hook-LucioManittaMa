import React from 'react';
import { Button } from 'react-bootstrap';

const IncrementButton = ({ onIncrement }) => {
  return (
    <Button variant="primary" onClick={onIncrement}>
      Increment
    </Button>
  );
};

export default IncrementButton;