import React, { useState } from "react";
import { Button, Row,Col } from "react-bootstrap";
export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  return (
  
    <div>
      <Row>
        <Col>
          
            <Button variant="dark" onClick={() =>cntr<10 && setCntr(cntr + 1)}>
              + 
            </Button>
            </Col><Col>
          <h2>{cntr}</h2>
          </Col>
          <Col>
          
            <Button variant="dark" onClick={()=>cntr>0 && setCntr(cntr - 1)}> - </Button>
          </Col>
        </Row>
      
    </div>
    
  );
};
