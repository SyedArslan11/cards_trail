
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
// import { CarouselParent } from './Components/CarouselParent';
// import { Carousel } from 'react-bootstrap';
import React from "react";
// import { Counter } from './Components/Counter';
// import { Forms } from "./Components/table/Forms";
//import { GridLayout } from "./Components/table/GridLayout";
// import { Forms2 } from "./Components/table/TrippleLoop";
import { LookForSearch } from "./Components/table/SearchyBoxz";  
import { EmiCalculator } from "./Components/table/InteresetCalculator"
import { PianoBtn } from "./Components/table/PianoBtn"
import { Container, Row,Col } from "react-bootstrap"
import {AudioPlayer} from "./Components/table/AudioPlayer"
import { LookForSearchNew } from "./Components/Employee/EmploeeList"
import { EmployeeList } from "./Components/Employee/EmploeeList"
function App() {
  return (
/*<div>
      <CarouselParent/> 
      <Carousel/>   </div>
  );
}*/
    <div>
      <EmployeeList/>
      {/* <LookForSearchNew/> */}
      {/* <LookForSearch/> */}
      {/* <Container> */}
      {/* <AudioPlayer/> */}
      {/* <Row> */}
      
      
      
      {/* <Col md={4}><PianoBtn/></Col>
      <Col md={4}><PianoBtn/></Col>
      <Col md={4}><PianoBtn/></Col>
      </Row></Container> */}
      
      {/* <Forms /> */}
      {/* <EmiCalculator/> */}
      {/* {<GridLayout />} */}
      {/* <Counter/> */}
      
    </div>
  );
}

export default App;
