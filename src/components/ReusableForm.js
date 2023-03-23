import React from "react";
import PropTypes from "prop-types";

export default function ReusableForm(props) {
  
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{props.buttonText}</button>          
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};