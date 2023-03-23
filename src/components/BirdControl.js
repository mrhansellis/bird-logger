import React from "react";
import SightingList from "./SightingList";
import NewSightingForm from "./NewSightingForm";

class BirdControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSightingList: [],
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewSightingToList = (newSighting) => {
    const newMainSightingList = this.state.mainSightingList.concat(newSighting);
    this.setState({mainSightingList: newMainSightingList,
                  formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let button = null;
    
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSightingForm onNewSightingCreation={this.handleAddingNewSightingToList} />
      buttonText = "Return to Sighting List"
    } else {
      currentlyVisibleState = <SightingList sightingList={this.state.mainSightingList}/>
      buttonText="Add Encounter";
      button = <button onClick={this.handleClick}>{buttonText}</button> ;
    }
    return (
      <>
        {currentlyVisibleState}
        {button}
      </>
    )
  }
}

export default BirdControl;