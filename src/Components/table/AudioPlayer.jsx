import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./AudioPlayer.css";

export const AudioPlayer = () => {
  const audio = new Audio("audios/Darkness.mp3");
  const handleAudioPlay = () => {
    audio.play();
  };
  const handleAudioStop = () => {
    audio.pause();
  };
  return (
    <Card className="topbtn">
      <Row>
        <Col></Col>
        <Col>
          <Button variant="dark" onClick={handleAudioPlay}>
            Play
          </Button>
        </Col>
        <Col>
          <Button variant="warning" onClick={handleAudioStop}>
            Stop
          </Button>
        </Col>
        <Col>
          <Button variant="warning" onClick={handleAudioStop}>
            Stop
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
