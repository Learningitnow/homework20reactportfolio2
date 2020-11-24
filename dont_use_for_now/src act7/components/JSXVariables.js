import React from "react";


function JSXVariables() {
  const name = "Joejo"
  const num1 =2
  const num2 =3
  const reactThougts = "help me please"


  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {num1+num2} letters</h2>
          <h2>I think React {reactThougts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
