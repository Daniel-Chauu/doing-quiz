import React from "react";
import videoHomePage from "../../assets/video-homePage.mp4";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="home-video">
        <video autoPlay muted loop>
          <source src={videoHomePage} type="video/mp4" />
        </video>
      </div>
      <div className="home-content">
        <h2 className="home-heading">There's a better way to ask</h2>
        <p className="home-desc">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </p>
        <div>
          <button className="home-btn-start">Get started - it's free</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
