import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const Counter = () => {
  const [cntr, setCntr] = useState(0);
  return (
    <div>
      <table>
        <tr>
          <td>
            <Button variant="dark" onClick={() =>cntr<10 && setCntr(cntr + 1)}>
              + 
            </Button>
          </td>
          <h2>{cntr}</h2>
          <td>
            <Button variant="dark" onClick={()=>cntr>0 && setCntr(cntr - 1)}> - </Button>
          </td>
        </tr>
      </table>
    </div>
  );
};
