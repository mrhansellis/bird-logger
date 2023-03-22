import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export default function ReusableForm(props) {
  
  return (
    <>
      <form onSubmit={props.handleNewReusableFormSubmission}>
        <input 
          type='text'
          name='species'
          placeholder='Bird Species' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <input 
         type='date'
         name='encounterDate' />
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  handleNewReusableFormSubmission: PropTypes.func,
  buttonText: PropTypes.string
};