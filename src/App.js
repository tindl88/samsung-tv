import React from "react";

// Pages
import Home from "./pages/home";
import Videos from "./pages/videos";
import VideoPlayer from "./pages/videoPlayer";
import Spinners from "./pages/spinners";
import Github from "./pages/github";
import Exit from "./pages/exit";

// Modules
import SpatialNavigation from "react-js-spatial-navigation";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Sidebar from "./components/sidebar";

// Css
import "./App.css";

function App(props) {
  if (!props.isLeaving) {
    return (
      <Router basename="/">
        <SpatialNavigation />
        <Sidebar />
        <Switch>
        <Route component={VideoPlayer} path="/videos/player"></Route>
          <Route component={Videos} path="/videos"></Route>
          <Route component={Spinners} path="/spinners"></Route>
          <Route component={Github} path="/github"></Route>
          <Route component={Home} path="/"></Route>
        </Switch>
      </Router>
    );
  } else {
    return (
      <>
        <SpatialNavigation />
        <Exit />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLeaving: state.app.isLeaving,
  };
};

export default connect(mapStateToProps, null)(App);
