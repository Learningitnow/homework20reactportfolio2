import React from "react";

function ListItem(props){
  return (
  <li class="list-item"><b>{props.item}</b></li>
  )
}

function List(props) {
  const groceries = props.groceries
  return (
    <ul className="list-group">
      Using the map method, render one li element displaying the text property of each grocery
      object.
      {groceries.map(function(food){
      return <ListItem item={food.name}/>
      })}
    </ul>
  );
}

export default List;
