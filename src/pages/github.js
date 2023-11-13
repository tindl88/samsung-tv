import React from "react";

// Modules
import { connect } from "react-redux";

function Github(props) {
  return (
    <div className="container center">
      <h2>Github</h2>
      <h6 style={{ margin: 0 }}>https://github.com/IssamElNass/React-Samsung-Smart-Tv-Template</h6>
      <h6 style={{ margin: 0 }}>A star is always lovely 😄</h6>
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

export default connect(null, mapDispatchToProps)(Github);
