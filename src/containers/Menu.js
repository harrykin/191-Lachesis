import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import "./Menu.css";
import location from "./images/location.jpg";
import lookup from "./images/lookup.jpg";
import add from "./images/add.jpg";
import feedback from "./images/feedback.jpg";

export default function Menu(props) {
  function myfunction() {
    console.log("Clicked");
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.history.push("/menu");
    /**try {
        await Auth.signIn(email, password);
        props.userHasAuthenticated(true);
        props.history.push("/");
        } catch (e) {
        alert(e.message);
        }**/
  }

  return (
    <div className="Menu">
      <h1 className="header">UCI Medical Center Radiation Oncology</h1>
      <Grid className="grid">
        <Row columns={2}>
          <Col>
            <a href="./location">
              <img src={location} alt="Location logo" className="center" />
            </a>
          </Col>
          <Col>
            <a href="./location">
              <img src={lookup} alt="Lookup logo" className="center" />
            </a>
          </Col>
        </Row>
        <Row columns={2}>
          <Col>
            <a href="./location">
              <img src={add} alt="Add logo" className="center" />
            </a>
          </Col>
          <Col>
            <a href="./location">
              <img src={feedback} alt="Feedback logo" className="center" />
            </a>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
