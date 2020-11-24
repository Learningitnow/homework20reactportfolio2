import React from "react";

function Card(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={props.cardimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.projectlink} target="_blank" rel="noreferrer" className="btn btn-info">
          {props.projectname}</a>
        <a href={props.repolink} target="_blank" rel="noreferrer" className="btn btn-info">
          {props.projectname+" Repo"}</a>
      </div>
    </div>
  );
}

export default Card;
