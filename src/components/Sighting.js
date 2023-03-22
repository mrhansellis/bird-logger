import React from "react";

function Sighting(props){
  
  return(
    <React.Fragment>
      <h1>Bird Sighting</h1>
      <h3>{props.bird}</h3>
      <h3>{props.location}</h3>
      <h3>{props.dateTime}</h3>
    </React.Fragment>
  )
}

export default Sighting;