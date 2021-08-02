import React from "react";
import { useState } from "react";
import { Row, Card, Form, Container, Button } from "react-bootstrap";
import { searchReducer } from "./searchReducer";

export const LookForSearch = () => {
  const {
    firstname,
    lastname,
    cityname,
    statename,
    countryname,
    designation,
    cardphoto,
  } = searchReducer.Data[0];
  const [fname, setFname] = useState(firstname);
  const [lname, setLname] = useState(lastname);
  const [work, setWork] = useState(designation);
  const [city, setCity] = useState(cityname);
  const [state, setState] = useState(statename);
  const [country, setCountry] = useState(countryname);
  const [photoz, setPhoto] = useState(cardphoto);
  return (
    <Container>
      <Card>
        <Row>
          <Form.Control type="text" placeholder="search here"></Form.Control>
        </Row>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={photoz} />
            <Card.Body>
              <Card.Title>{`${fname} ${lname}`}</Card.Title>
              <Card.Text>
                <b>Designation:</b>
                {`${work}`}
                <br />
                <b>Base Location:</b>
                <br />
                {`${city},${state},${country}`}
              </Card.Text>
              <Button variant="success">Read Full Profile</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{`${fname} ${lname}`}</Card.Title>
              <Card.Text>
                <b>Designation:</b>
                {`${work}`}
                <br />
                <b>Base Location:</b>
                <br />
                {`${city},${state},${country}`}
              </Card.Text>
              <Button variant="success">Read Full Profile</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{`${fname} ${lname}`}</Card.Title>
              <Card.Text>
                <b>Designation:</b>
                {`${work}`}
                <br />
                <b>Base Location:</b>
                <br />
                {`${city},${state},${country}`}
              </Card.Text>
              <Button variant="success">Read Full Profile</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{`${fname} ${lname}`}</Card.Title>
              <Card.Text>
                <b>Designation:</b>
                {`${work}`}
                <br />
                <b>Base Location:</b>
                <br />
                {`${city},${state},${country}`}
              </Card.Text>
              <Button variant="success">Read Full Profile</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{`${fname} ${lname}`}</Card.Title>
              <Card.Text>
                <b>Designation:</b>
                {`${work}`}
                <br />
                <b>Base Location:</b>
                <br />
                {`${city},${state},${country}`}
              </Card.Text>
              <Button variant="success">Read Full Profile</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{`${fname} ${lname}`}</Card.Title>
              <Card.Text>
                <b>Designation:</b>
                {`${work}`}
                <br />
                <b>Base Location:</b>
                <br />
                {`${city},${state},${country}`}
              </Card.Text>
              <Button variant="success">Read Full Profile</Button>
            </Card.Body>
          </Card>
        </Row>
      </Card>
    </Container>
  );
};
