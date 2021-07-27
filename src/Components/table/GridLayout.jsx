import { Row, Col, Button } from "react-bootstrap";
export const GridLayout = () => {
  return (
    <div>
      <Row>
        <Col>
          <input type="text" placeholder="First Name" />
        </Col>
        <Col>
          <input type="text" placeholder="Middle Name" />
        </Col>
        <Col>
          <input type="text" placeholder="Last Name" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="Phone Number" />
        </Col>
        <Col>
          <input type="text" placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="Current Address" />
        </Col>
        <Col>
          <input type="text" placeholder="Permanent Address" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Submit</Button>
        </Col>
      </Row>
    </div>
  );
};
