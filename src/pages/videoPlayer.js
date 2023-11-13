import React, { useRef, useEffect, useState } from "react";
// Css
import ButtonVideoPlayer from "../components/buttonVideoPlayer";

// Modules
import { connect } from "react-redux";
import { useIdleTimer } from "react-idle-timer";

import { useHistory } from "react-router-dom";

import subs from "../assets/subs.vtt";

function VideoPlayer(props) {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [movement, setMovement] = useState(false);
  const [paused, setPaused] = useState(false);
  const [focusFirstElement, setFocusFirstElement] = useState(false);
  const vidRef = useRef(null);

  const handleOnIdle = (event) => {
    console.log("user is idle", event);
    setMovement(false);
  };

  const handleOnActive = (event) => {
    console.log("user is active", event);
    setFocusFirstElement(true);
    setMovement(true);
  };

  const handleOnAction = (e) => {
    setMovement(true);
    setFocusFirstElement(true);
  };

  const setVideoPaused = () => {
    setPaused(!paused);
    if (paused) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 5000,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 200,
  });

  const keyHandler = (key) => {
    // check if keycode is the return button on the remote and the remove button on your keyboard
    if (key.keyCode === 10009 || key.keyCode === 8) {
      props.setSidebarHidden(false);
      history.goBack();
    }
  };

  useEffect(() => {
    vidRef.current.load();
    console.log("loading video");
    window.addEventListener("keydown", keyHandler);
    let timer1 = setTimeout(() => {
      setIsLoading(false);
      vidRef.current.play();
      console.log("playing video");
      console.log(vidRef);
    }, 3000);
    return () => {
      window.removeEventListener("keydown", keyHandler);
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "black", overflow: "hidden" }}>
      <video
        preload="auto"
        ref={vidRef}
        className={!isLoading ? "videoplayer" : "hide"}
      >
        <source
          type="video/mp4"
          src="http://ftp.nluug.nl/pub/graphics/blender/demo/movies/Sintel.2010.720p.mkv"
        />
        <track
          label="English"
          kind="subtitles"
          srclang="en"
          src={subs}
          default
        ></track>
      </video>
      <div
        className={
          "video-center " +
          (movement && !isLoading ? "media-menu" : "media-menu-hidden")
        }
      >
        {movement && !isLoading && (
          <div className="controls">
            <ButtonVideoPlayer onClick={setVideoPaused} icon="left" />
            <ButtonVideoPlayer
              onClick={setVideoPaused}
              id="play"
              focused={focusFirstElement}
              icon={paused ? "play" : "pause"}
            />
            <ButtonVideoPlayer onClick={setVideoPaused} icon="right" />
          </div>
        )}
      </div>
      <div className={isLoading ? "video-container center" : "hide"}>
        <div className="loadingio-spinner-eclipse-dfl8ntvdf4h">
          <div className="ldio-epf75lcsoxo">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSidebarHidden: (data) => {
      dispatch({
        type: "SET_SIDEBAR_HIDDEN",
        isHidden: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(VideoPlayer);
