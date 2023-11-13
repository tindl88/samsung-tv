import React from "react";

// Css
import Button from "../components/button";

function About(props) {
  return (
    <div className="container">
      <h2>About</h2>
      <Button focus={() => props.setIsFocusedInSideBar(false)} />
    </div>
  );
}

export default About;
