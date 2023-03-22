import React from "react";
import themeImage from "./../img/themeImage.png";


export default function Header() {
  return ( 
    <>
      <h1>Bird Encounters</h1>
      <img src={themeImage} alt="Seagulls over the Blue ocean" width="255"/>
    </>
  );
}
