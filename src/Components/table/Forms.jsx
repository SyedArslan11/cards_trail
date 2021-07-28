import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Card, Form, Image } from "react-bootstrap";
import { employeeReducer } from "../employeeReducer";
import "../table/Forms.css";
export const Forms = () => {
  const { firstname, lastname, cityname, statename, countryname } =
    employeeReducer.Data[0];
  const [fname, setFname] = useState(firstname);
  const [lname, setLname] = useState(lastname);
  const [city, setCity] = useState(cityname);
  const [state, setState] = useState(statename);
  const [country, setCountry] = useState(countryname);
  const [bulb, setBulb] = useState("On");

  return (
    <div>
      <Card>
        <Row>
          <Col></Col>

          <Col xs={4} className={bulb === "On" ? "firstcard" : "firstcard2"}>
            <Row> First Name: </Row>
            <Row>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              ></Form.Control>
            </Row>
            <Row> Last Name: </Row>
            <Row>
              <Form.Control
                type="text"
                placeholder="Enter Second Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              ></Form.Control>
            </Row>
            <br />
            <br />

            <Col md={8}>
              <Form>
                <Row>Address:</Row>
                <Row>
                  <Form.Control
                    type="text"
                    placeholder="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></Form.Control>
                </Row>
                <Row>
                  <Form.Control
                    type="text"
                    placeholder="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></Form.Control>
                </Row>

                <Row>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  ></Form.Control>
                </Row>
              </Form>
              <br />
              <br />
            </Col>
          </Col>

          <Col xs={4}>
            <Col md={6}>
              <br />
              <br />
              <br /> <Row></Row>
              <Row></Row> <br />
              <br />
              <Row></Row>
              <Card
                className={bulb === "On" ? "profilecard" : "profilecard2"}
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  src="https://image.shutterstock.com/image-vector/man-icon-flat-vector-260nw-1371568223.jpg"
                />
                <Card.Body>
                  <Card.Title>{`${fname} ${lname}`}</Card.Title>
                  <Card.Text>{`${city},${state},${country}`}</Card.Text>
                  <Button variant="danger">Finish</Button>
                </Card.Body>
              </Card>
              <Row></Row>
            </Col>
          </Col>

          <Col>
            <Image
              src={`images/bulbs${bulb}.png`}
              onClick={() => (bulb === "Off" ? setBulb("On") : setBulb("Off"))}
            ></Image>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
