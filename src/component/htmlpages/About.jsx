import React from "react";
import Personalinfo from '../Personalinfo';
import Socialmedia from "../Socialmedia"

function About(props) {
  return (
    <div>
      <Personalinfo />
      <Socialmedia />
    </div>
  );
}

export default About;