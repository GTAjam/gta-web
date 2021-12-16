import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Counter = ({ count, setCount }) => {
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUjWlFarsnWS830U7ohwh8tlN01dnQcMjht1FfI8tuVnKpo5N1WBVSn2bzRDLCYZNzIY&usqp=CAU"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{count}</Card.Text>
        <Button
          className="mx-3"
          onClick={() => {
            decreaseCount();
          }}
          variant="danger"
        >
          -
        </Button>
        <Button variant="success" onClick={addCount}>
          +
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Counter;
