import React, { useState } from "react";
import { Form, Col, Button, Row, Card } from "react-bootstrap";
import "./InteresetCalculator.css";
export const EmiCalculator = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);
  const handleCalEMI = () => {
    setSi((p * n * r) / 100);
  };
  return (
    <div>
      <Card className="Calc">
        <Row>
          <h1 className="heading1">EMI CALCULATOR</h1>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Principal"
              onChange={(e) => setP(e.target.value)}
            ></Form.Control>
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Number Of Years"
              onChange={(e) => setN(e.target.value)}
            ></Form.Control>
          </Col>
          <Col md={3}>
            <Form.Control
              type="number"
              placeholder="Rate Of Interest"
              onChange={(e) => setR(e.target.value)}
            ></Form.Control>
            <Button variant="light" onClick={() => handleCalEMI()}>
              Submit
            </Button>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={6}>
            <h1>Simple Interest : {si}</h1>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
