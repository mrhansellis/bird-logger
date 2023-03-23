import React from "react";
import PropTypes from "prop-types";

function Sighting(props){
  
  return(
    <>
      <div onClick = {() => props.whenSightingClicked(props.id)}>
        <h1>Bird Sighting</h1>
        <h3>Species: {props.species}</h3>
        <h3>Location: {props.location}</h3>
        <h3>Date: {props.encounterDate}</h3>
      </div>
    </>
  )
}

Sighting.propTypes = {
  species: PropTypes.string,
  location: PropTypes.string,
  date:  PropTypes.string,
  id: PropTypes.string,
  whenSightingClicked: PropTypes.func
};

export default Sighting;