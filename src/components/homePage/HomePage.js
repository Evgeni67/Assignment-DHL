import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./HomePage.module.scss";

const HomePage = () => {
  const favourites = useSelector((state) => state.albums.favouritesAlbum);

  return (
    <>
      <div className={classes.MainHomeContainer}>
        <div className={classes.Heading}>
          <div className={classes.InnerTextContainer}>
            <h1 style={{ color: "white" }}>Heading</h1>
            <h3 className={classes.InfoText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
            <Link to="/searchPage" className={classes.LinkButton}>
              <button className={classes.SearchButton}>Search</button>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "25%",
          margin: "0 auto",
          justifyContent: "center",
          fontSize: "1.7rem",
          padding: "15px",
          backgroundColor: " #59636c",
          color: "whitesmoke",
          borderRadius: "0px 0px 5px 5px",
        }}
      >
        Your Favourites
      </div>
      <div className={classes.FavouritesContainer}>
        {false && "No movies added to favourites"}
        {favourites?.map((image) => (
          <img
            src={
              image?.url ?? "https://pic.onlinewebfonts.com/svg/img_98811.png"
            }
            className={classes.FavImg}
            alt="fav movie img"
            onClick={() => (window.location = `singleMoviePage/${image.id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
