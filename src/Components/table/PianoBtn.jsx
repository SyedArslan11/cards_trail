import React from "react";
import { Button } from "react-bootstrap";
export const PianoBtn = () => {
  const pianoPlay = (bit) => {
    const audio = new Audio(`notes/${bit}.mp3`);
    audio.play();
  };
  return (
    <div>
      <Button
        variant="light"
        className="pianobtn"
        onMouseDown={() => pianoPlay("A")}
      >
        A
      </Button>
      <Button
        variant="light"
        className="pianobtn"
        onMouseDown={() => pianoPlay("B")}
      >
        B
      </Button>
      <Button
        variant="dark"
        className="pianobtn"
        onMouseDown={() => pianoPlay("C")}
      >
        C
      </Button>
      <Button
        variant="light"
        className="pianobtn"
        onMouseDown={() => pianoPlay("D")}
      >
        D
      </Button>
      <Button
        variant="light"
        className="pianobtn"
        onMouseDown={() => pianoPlay("E")}
      >
        E
      </Button>
      <Button
        variant="dark"
        className="pianobtn"
        onMouseDown={() => pianoPlay("F")}
      >
        F
      </Button>
      <Button
        variant="light"
        className="pianobtn"
        onMouseDown={() => pianoPlay("G")}
      >
        G
      </Button>
      <Button
        variant="light"
        className="pianobtn"
        onMouseDown={() => pianoPlay("G4")}
      >
        H
      </Button>
    </div>
  );
};
