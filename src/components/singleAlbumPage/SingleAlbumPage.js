/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import backendUrls from "../../utils/backendurls";
import axios from "axios";

import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/slices/albumsReducer";

import { useParams } from "react-router-dom";

import classes from "./SingleAlbumPage.module.scss";

const SingleAlbumPage = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const selectedAlbum = useSelector((state) => state.albums.selectedAlbum);
  const favourites = useSelector((state) => state.albums.favouritesAlbum);
  const [movie, setMovie] = useState({});

  const isInFavourites = (element) => {
    let result = favourites.filter(
      (fav) => element.id === fav.id && element.albumId === fav.albumId
    );
    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className={classes.Header}> Album #{albumId}</div>
      {selectedAlbum.map((image) => (
        <div className={classes.MainMovieContainer}>
          <img
            src={image?.thumbnailUrl}
            alt="movie pic"
            className={classes.MoviePic}
          />
          <div className={classes.Heading}>
            <div className={classes.InnerTextContainer}>
              <h1 style={{ color: "white" }}>{image?.title}</h1>
              <div style={{ color: "lightgray", marginTop: "-20px" }}>
                {movie?.show?.genres?.join(", ")}
              </div>
              <h3 className={classes.InfoText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>

              <button
                className={classes.HandleFavouritesBtn}
                onClick={() =>
                  isInFavourites(image)
                    ? dispatch(removeFromFavourites(image.id))
                    : dispatch(addToFavourites(image))
                }
              >
                {isInFavourites(image)
                  ? "Remove from favourites"
                  : "Add to favourites"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleAlbumPage;
