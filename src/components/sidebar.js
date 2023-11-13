import React, { useState } from "react";

// Components
import Button from "./button";

// Modules
import { connect } from "react-redux";

import logo from '../assets/logo.png'
function Sidebar(props) {
  const [currentRoute, setCurrentRoute] = useState("/");



  return !props.sideBarIsHidden ? (
    <div className={props.focusedInSidebar ? "sidebar-wider" : "sidebar"}>
      <img className="logo-sidebar" src={logo}/> 
      <div>
        <Button
          icon="home"
          to="/"
          active={currentRoute === "/" ? true : false}
          onClick={(route) => setCurrentRoute(route)}
          focus={() => props.setIsFocusedInSideBar(true)}
        />
        <Button
          icon="video"
          to="videos"
          active={currentRoute === "videos" ? true : false}
          onClick={(route) => setCurrentRoute(route)}
          focus={() => props.setIsFocusedInSideBar(true)}
        />
        <Button
          icon="loading"
          to="spinners"
          onClick={(route) => setCurrentRoute(route)}
          active={currentRoute === "spinners" ? true : false}
          focus={() => props.setIsFocusedInSideBar(true)}
        />
        <Button
          icon="github"
          to="github"
          active={currentRoute === "github" ? true : false}
          onClick={(route) => setCurrentRoute(route)}
          focus={() => props.setIsFocusedInSideBar(true)}
        />
      </div>
      <Button
        onClick={() => props.setIsLeaving(true)}
        focus={() => props.setIsFocusedInSideBar(true)}
      />
    </div>
  ): null;
}

const mapStateToProps = (state) => {
  return {
    focusedInSidebar: state.app.focusedInSidebar,
    sideBarIsHidden: state.app.sideBarIsHidden
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsFocusedInSideBar: (data) => {
      dispatch({
        type: "SET_FOCUSED_SIDEBAR",
        focused: data,
      });
    },
    setIsLeaving: (data) => {
      dispatch({
        type: "SET_IS_LEAVING",
        isLeaving: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
