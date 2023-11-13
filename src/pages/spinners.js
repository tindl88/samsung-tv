import React from "react";

// Components
import Button from "../components/button";

// Modules
import { connect } from "react-redux";

function Spinners(props) {
  return (
    <div className="container center">
      <h2>Spinners</h2>
      <div className="loadingio-spinner-eclipse-dfl8ntvdf4h">
        <div className="ldio-epf75lcsoxo">
          <div></div>
        </div>
      </div>
      <h6>This button is placed to showcase the collapse of the sidebar</h6>
      <Button focus={() => props.setIsFocusedInSideBar(false)} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsFocusedInSideBar: (data) => {
      dispatch({
        type: "SET_FOCUSED_SIDEBAR",
        focused: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Spinners);
