import { Component } from "react";
import "../styles/componentsStyles/PageHeader.css";

// Instruction to use this PageHeader Component:
// Make sure the Image is 16:9 ratio to avoid any distortion
// Make sure the brightness and exposure is set to low for the best visibility of the text


function PageHeader(props) {
  return (
    <>
      <div className="page-header" style={{backgroundImage:`url(${props.image})`}}>
        <h1 className="page-header-title">{props.title}</h1>
      </div>
    </>
  );
}

export default PageHeader;
