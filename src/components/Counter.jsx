import React from 'react';
import { Card } from 'react-bootstrap';

const Counter = ({ count }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Counter</Card.Title>
        <Card.Text>
          The current count is: <strong>{count}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Counter;