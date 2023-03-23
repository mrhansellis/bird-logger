import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

export default function NewSightingForm(props){
  
  function handleNewSightingFormSubmission(e) {
    e.preventDefault();
    props.onNewSightingCreation({
      species: e.target.species.value,
      location: e.target.location.value,
      encounterDate: e.target.encounterDate.value,
      id: v4()
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewSightingFormSubmission}
        buttonText="Submit" />
    </>
  );
}

NewSightingForm.propTypes = {
  onNewSightingCreation: PropTypes.func
}