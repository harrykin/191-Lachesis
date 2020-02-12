import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Location.css";
import map from "./images/map.jpg";

export default function Location(props) {
  function myfunction() {
    console.log("Clicked");
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.history.push("/location");
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
      <img src={map} alt="Map" />
    </div>
  );
}
