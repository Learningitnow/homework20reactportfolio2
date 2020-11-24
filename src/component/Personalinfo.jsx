import React from "react";
import myselfie from "../assets/selfie.jpg";
import resume from "../assets/Resume for Bootcamp Joejo SiQi Zhou.pdf";

function Contact(props) {
  return (
    <div id="page-container">
      <div className="container">
        <div className="col-lg">
          <img src={myselfie} alt="a lovely corgi" className="img-thumbnail" />

          <p id="corgisidelorem">
            JoeJo Zhou is a student of full stack web development. With love of
            learning, and covid and maybe a bit of carrer change in mind, Joejo
            began his coding journey on early September 2020. While this course
            has been very challenge for him, but he is still trying and learning
            all the concepts to become a good coder. He is also very insterest
            in Movies and Snowboarding as well.
          </p>
          <a href={resume}>Visit my Resume here</a>
        </div>
       
      </div>
    </div>
  );
}

export default Contact;
