import React, { useState } from "react";
import { Form, Col, Button, Row, Card, Container } from "react-bootstrap";
import "./InteresetCalculator.css";
export const EmiCalculator = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [emi, setEmi] = useState(0);
  const handleCalEMI = () => {
    const si = (p * n * r) / 100;
    const repayAmount = Number(p) + Number(si);
    const emiLocal = repayAmount / (n * 12);
    setEmi(emiLocal);
  };
  return (
    <div>
      <div>
        <Card>
          <Row>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Sa
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Re
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Ga
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Ma
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Pa
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Da
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Ni
              </Button>
            </Col>
            <Col>
              <Button variant="light" onClick="" className="pianobtn">
                Sa
              </Button>
            </Col>
            <Col md={7}></Col>
          </Row>
        </Card>
      </div>
      <Container>
        <Card id="Calc">
          {/* <Row> */}
          <Card className="secondCard">
            <h1 className="heading1">EMI CALCULATOR</h1>
            {/* <Col md={1}></Col> */}
            {/* <Col md={3}> */}
            <Form.Control
              type="number"
              placeholder="Principal"
              onChange={(e) => setP(e.target.value)}
            ></Form.Control>
            {/* </Col> */}
            {/* <Col md={3}> */}
            <Form.Control
              type="number"
              placeholder="Number Of Years"
              onChange={(e) => setN(e.target.value)}
            ></Form.Control>
            {/* </Col> */}
            {/* <Col md={3}> */}
            <Form.Control
              type="number"
              placeholder="Rate Of Interest"
              onChange={(e) => setR(e.target.value)}
            ></Form.Control>
            <Button variant="light" onClick={handleCalEMI}>
              Submit
            </Button>
          </Card>
          {/* </Col> */}
          {/* <Col md={2}></Col> */}
          {/* </Row> */}
          {/* <Row> */}
          {/* <Col md={6}> */}
          <h1>Simple Interest : {emi}</h1>
          {/* </Col> */}
          {/* </Row> */}
        </Card>
      </Container>
    </div>
  );
};
