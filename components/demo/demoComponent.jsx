import React, { useState } from "react";
// either use scss or css ( prefer scss )
// below is syntax for importing scoped css styles in components
import stylesScss from "./demo.module.scss";
import stylesCss from "./demo.module.css";

// using react-bootstrap component via importing
import { ListGroup } from "react-bootstrap";
import Counter from "./counter";

const DemoComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={stylesScss.root}>
      <h1>Demo</h1>
      <p className={stylesCss.description}>Things demoed</p>
      <div className={stylesScss.content}>
        <ListGroup className={stylesScss.list_group}>
          <ListGroup.Item>Importing Scoped Scss</ListGroup.Item>
          <ListGroup.Item>Importing Scoped Css</ListGroup.Item>
          <ListGroup.Item>Importing BootStrap Component</ListGroup.Item>
          <ListGroup.Item>Using State in react</ListGroup.Item>
          <ListGroup.Item>Passing Props</ListGroup.Item>
          <ListGroup.Item>
            Splitting in to smaller components for reuse and modularity
          </ListGroup.Item>
          <ListGroup.Item>Using Media Query for responsiveness</ListGroup.Item>
        </ListGroup>

        {/* passing props to Counter component */}
        <Counter count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default DemoComponent;
