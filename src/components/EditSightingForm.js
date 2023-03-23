import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

export default function EditSightingForm (props) {

  const { sighting } = props;

  function handleEditSightingFormSubmission(event) {
    event.preventDefault();
    props.onEditSighting({species: event.target.species.value, location: event.target.location.value, encounterDate: event.target.encounterDate.value, id: sighting.id});
  }

  return (
    <>
    <ReusableForm
    formSubmissionHandler={handleEditSightingFormSubmission}
      buttonText="Update Sighting" />
    </>
  );
}

EditSightingForm.propTypes = {
  sighting: PropTypes.object,
  onEditSighting: PropTypes.func
}