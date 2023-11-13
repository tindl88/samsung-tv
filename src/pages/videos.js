import React from "react";

import Button from "../components/button";

import Card from "../components/card";

// Modules
import { connect } from "react-redux";

const posters = [
  "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
  "https://sm.ign.com/t/ign_nl/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_n1c6.1080.jpg",
  "https://www.joblo.com/assets/images/joblo/posters/2020/03/2EF9FAE7-B888-4DBA-868D-B4E289BAE769.jpeg",
  "https://i.pinimg.com/originals/b9/8e/e9/b98ee9a8e07f2e6a50e93644970f7b38.jpg",
  "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/750/BKkK_1-Sheet1547058443.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/819pA4VqgBL._AC_SL1387_.jpg",
  "https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/captain-marvel-higher-further-faster-61x91-5cm-movie-posters-31607-1-p.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
  "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/JDehNhC4.jpeg",
  "https://3.bp.blogspot.com/-UkhJtk-TqjU/Ws-ThQF-cuI/AAAAAAAAV5A/LaOP9cVn5mcICmmJMBmTXYIplZHVmSy_wCLcBGAs/s1600/Incredibles%2B2%2BMovie%2BPoster%2BFamily.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/scifi-movie-poster-template-design-cd0acba902c2650acb2e2c6aa902e1d2_screen.jpg?ts=1574329280",
  "https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217",
];

function Videos(props) {
  const renderCards = () => {
    let array = [];

    posters.forEach((image) => {
      array.push(
        <Card
          onClick={() => props.setSidebarHidden(true)}
          key={image}
          to="videos/player"
          focus={() => props.setIsFocusedInSideBar(false)}
          image={image}
        />
      );
    });
    return array;
  };

  return (
    <div className="container padding-left">
      <h2 style={{ zIndex: 3 }}>Videos</h2>
      <Button focus={() => props.setIsFocusedInSideBar(false)} />
      <h4 style={{ margin: 0 }}>Now Available!</h4>
      <div className="wrapper">{renderCards()}</div>
      <h4 style={{ margin: 0 }}>Popular!</h4>
      <div className="wrapper">{renderCards()}</div>
      <h4 style={{ margin: 0 }}>Action</h4>
      <div className="wrapper">{renderCards()}</div>
      <h4 style={{ margin: 0 }}>Drama</h4>
      <div className="wrapper">{renderCards()}</div>
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
    setSidebarHidden: (data) => {
      dispatch({
        type: "SET_SIDEBAR_HIDDEN",
        isHidden: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Videos);
