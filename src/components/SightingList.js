import React from "react";
import Sighting from "./Sighting";
import PropTypes from "prop-types";

function SightingList(props){
  return (
    <>
      <hr/>
      {props.sightingList.map((sighting) =>
        <Sighting
          whenSightingClicked = { props.onSightingSelection }
          species = {sighting.species}
          location = {sighting.location}
          encounterDate = {sighting.encounterDate}
          id={sighting.id}
          key= {sighting.id}/>
      )}
    </>
  );
}

SightingList.propTypes = {
  sightingList: PropTypes.array,
  onSightingSelection: PropTypes.func
};

export default SightingList;