// import logo from './logo.svg';
import "./App.css";
// import { CarouselParent } from './Components/CarouselParent';
// import { Carousel } from 'react-bootstrap';
import React from "react";
// import { Counter } from './Components/Counter';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Forms } from "./Components/table/Forms";
//import { GridLayout } from "./Components/table/GridLayout";
// import { Forms2 } from "./Components/table/TrippleLoop";
import { EmiCalculator } from "./Components/table/InteresetCalculator"
import { PianoBtn } from "./Components/table/PianoBtn"
function App() {
  return (
    /*<div>
      <CarouselParent/> 
      <Carousel/>   </div>
  );
}*/
    <div>
      <PianoBtn/>
      {/* <Forms /> */}
      <EmiCalculator/>
      {/* {<GridLayout />} */}
      {/* <Counter/> */}
      
    </div>
  );
}

export default App;
