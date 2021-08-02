import React from "react";
import { Button } from "react-bootstrap";
export const PianoBtn = () => {
  const pianoPlay = (bit) => {
    const audio = new Audio(`notes/${bit}.mp3`);
    audio.play();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" && pianoPlay("A"));
    if (e.key === "s" && pianoPlay("B"));
    if (e.key === "d" && pianoPlay("C"));
    if (e.key === "f" && pianoPlay("D"));
    if (e.key === "h" && pianoPlay("E"));
    if (e.key === "j" && pianoPlay("F"));
    if (e.key === "k" && pianoPlay("G"));
    if (e.key === "l" && pianoPlay("G4"));
    if (e.key === "A" && pianoPlay("As"));
    if (e.key === "S" && pianoPlay("B4"));
    if (e.key === "D" && pianoPlay("Cs4"));
    if (e.key === "F" && pianoPlay("Ds"));
    if (e.key === "H" && pianoPlay("E4"));
    if (e.key === "J" && pianoPlay("Fs"));
    if (e.key === "K" && pianoPlay("Gs"));
    if (e.key === "L" && pianoPlay("Gs4"));
    e.stopPropagation();
  });
  return (
    <div>
      <Button
        variant="light"
        className="pianobtn"
        onMouse={() => pianoPlay("A")}
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
