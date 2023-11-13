import React from "react";

// Css
import Button from "../components/button";

// Modules
import { connect } from "react-redux";

function Home(props) {
  return (
    <div className="container center">
      <h2>Home</h2>
      <h6 style={{ margin: 0 }}>
        Welcome to the React Samsung Smart Tv Template!
      </h6>
      <h6 style={{ margin: 0 }}>v1.1.0</h6>
      <h6 style={{ margin: 0 }}>
        Navigate between screens by going to the sidebar!
      </h6>
      <h6 style={{ margin: 0 }}>
        or if you want to exit just go to the button at the bottom of the
        sidebar!
      </h6>
      <h6 style={{ margin: 0 }}>
        This button is placed to showcase the collapse of the sidebar
      </h6>
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

export default connect(null, mapDispatchToProps)(Home);
