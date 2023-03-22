import React from "react";
import SightingList from "./SightingList"

class BirdControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSightingList: false,
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let button = null;

    currentlyVisibleState = <SightingList />
    buttonText="Add Encounter";
    button = <button>{buttonText}</button> ;

    return (
      <>
        {currentlyVisibleState}
        {button}
      </>
    )
  }
}

export default BirdControl;