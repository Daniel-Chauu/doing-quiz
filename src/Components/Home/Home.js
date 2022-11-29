import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import videoHomePage from "../../assets/video-homePage.mp4";
import "./Home.scss";
const Home = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const nagivate = useNavigate();
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
          {isAuthenticated ? (
            <button
              className="home-btn-start"
              onClick={() => nagivate("/users")}
            >
              Doing Quiz Now
            </button>
          ) : (
            <button
              className="home-btn-start"
              onClick={() => nagivate("/login")}
            >
              Get started - it's free
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
