import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Button, Card, Form, Image } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "../table/Forms2.css";

export const Forms2 = () => {
  const [badalre, setBadlre] = useState("Purple");
  const handleChange = () => {
    badalre === "Purple" && setBadlre("Red");
    badalre === "Red" && setBadlre("Green");

    badalre === "Green" && setBadlre("Black");
    badalre === "Black" && setBadlre("Red");
  };
  return (
    <div>
      <Card>
        <Button onClick={() => handleChange()}>Toggle</Button>
        <h3>Test Subject</h3>
        <p>This is my COntent</p>
        <span style={{ color: badalre }}>
          <h1> PDAC Course</h1>
        </span>
        <Button onClick={() => setBadlre("red")}>red</Button>
        <Button onClick={() => setBadlre("pink")}>Pink</Button>
        <Button onClick={() => setBadlre("green")}>Green</Button>
        <Button onClick={() => setBadlre("gold")}>Gold</Button>
      </Card>
    </div>
  );
};
