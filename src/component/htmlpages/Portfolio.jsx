import React from "react";
import Card from "../Card"
import passwordgen from "../../assets/passwordgenerator.PNG"
import notespn from "../../assets/not espn.PNG"
import codequiz from "../../assets/codequiz.PNG"
import dayplan from "../../assets/dayplanner.PNG"
import weatherdash from "../../assets/weatherdasdboard.PNG"
import jinglemall from "../../assets/Jingle Mall project 2.PNG"

function Portfolio(props) {
  return (
    <div>
      <h1>Protfolio</h1>
      <div className="row">
        <div className="col">
        
          <Card
            name="Not ESPN"
            projectname="Not ESPN"
            titlecolor="midnightblue"
            cardimg={notespn}
            projectlink="https://npcoding25.github.io/Project-1/"
            repolink="https://github.com/Learningitnow/Project-1"
            description="Not ESPN was designed for the sports fanatic allowing you to search your favourite athletes and teams in both soccer and basketball"
          />
        </div>
        <div className="col">
          <Card
            name="Random Password Generator"
            projectname="Random Password Generator"
            titlecolor="midnightblue"
            cardimg={passwordgen}
            projectlink="https://learningitnow.github.io/homework-3-Password-Generator/"
            repolink="https://github.com/Learningitnow/homework-3-Password-Generator"
            description="trouble to think about password? try this"
          />
        </div>
        <div className="col">
          <Card
            name="Code quiz"
            projectname="Code quiz"
            titlecolor="midnightblue"
            cardimg={codequiz}
            projectlink="https://learningitnow.github.io/homework4-Codequiz/"
            repolink="https://github.com/Learningitnow/homework4-Codequiz"
            description="Show your love to Arsenal Fc,once the greast football club. Test your knowledge there.  "
          />
        </div>
        <div className="col">
          <Card
            name="Day Planner"
            projectname="Day Planner"
            titlecolor="midnightblue"
            cardimg={dayplan}
            projectlink="https://learningitnow.github.io/Homework5-DayPlanner/"
            repolink="https://github.com/Learningitnow/Homework5-DayPlanner"
            description="What is going on my day? messy messy messy, try this Day planner. "
          />
        </div>
        <div className="col">
          <Card
            name="Weather Dashboard"
            projectname="Weather Dashboard"
            titlecolor="midnightblue"
            cardimg={weatherdash}
            projectlink="https://learningitnow.github.io/Homework6-WeatherApp/"
            repolink="https://github.com/Learningitnow/Homework6-WeatherApp"
            description="What should i wear today, let's check up the weather. oh, no it is raining."
          />
        </div>
        <div className="col">
          <Card
            name="Jingle Mall"
            projectname="Jingle Mall"
            titlecolor="midnightblue"
            cardimg={jinglemall}
            projectlink="https://guarded-castle-93952.herokuapp.com/index.html"
            repolink="https://github.com/Learningitnow/Project-2-JingleMall"
            description="Work hard play hard, treat yourself a PS5 for the holiday! Buy, buy, buy, buy your way to happiness."
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;