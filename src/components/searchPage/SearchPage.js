import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedAlbum } from "../../redux/slices/albumsReducer";

import axios from "axios";

import backendUrls from "../../utils/backendurls";
import classes from "./SearchPage.module.scss";

const SearchPage = () => {
  const dispatch = useDispatch();

  const [searchWord, setSearchWord] = useState("");
  const [albums, setAlbums] = useState("");
  const [albumsArray, setAlbumsArray] = useState("");
  const [filteredAlbumsArray, setFilteredAlbumsArray] = useState("");

  const loadAlbums = async () => {
    try {
      const moviesRes = await axios.get(
        backendUrls.mainUrl + backendUrls.images.get.images
      );

      let result = moviesRes.data.reduce(function (r, a) {
        r[a.albumId] = r[a.albumId] || [];
        r[a.albumId].push(a);
        return r;
      }, Object.create(null));
      setAlbums(result);
      setAlbumsArray(Object.keys(result));
      setFilteredAlbumsArray(Object.keys(result));
    } catch (e) {
      console.error(e);
    }
  };
  const loadFilteredMovies = async () => {
    console.log(albumsArray.filter((album) => album === searchWord));
    setFilteredAlbumsArray(albumsArray.filter((album) => album === searchWord));
    if (searchWord === "") {
      setFilteredAlbumsArray(albumsArray);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div className={classes.MainSearchContainer}>
      <h1 style={{ alignSelf: "center", color: "white" }}>Search</h1>
      <div style={{ alignSelf: "center", marginBottom: "20px" }}>
        <input
          className={classes.InputCustom}
          placeholder={"Search by album #id..."}
          onChange={(e) => setSearchWord(e.currentTarget.value)}
          value={searchWord}
        />
        <button className={classes.SearchButton} onClick={loadFilteredMovies}>
          Search
        </button>
        <button
          className={classes.SearchButton}
          onClick={() => {
            loadAlbums();
            setSearchWord("");
          }}
          style={{ marginLeft: "10px" }}
        >
          Clear
        </button>
      </div>
      {filteredAlbumsArray?.length
        ? filteredAlbumsArray?.map((albumKey, id) => (
            <div className={classes.MovieRow} key={id}>
              <img
                src={"https://pic.onlinewebfonts.com/svg/img_98811.png"}
                alt="Movie Pic"
                onClick={() => {
                  window.location = `albumPage/${albumKey}`;
                  dispatch(setSelectedAlbum(albums[albumKey]));
                  console.log(albums[albumKey]);
                }}
                className={classes.MovieImg}
              />
              <div className={classes.Heading}>
                <div className={classes.InnerTextContainer}>
                  <h1 style={{ color: "white" }}>Album #{albumKey}</h1>
                  <div style={{ color: "lightgray", marginTop: "-20px" }}></div>
                  <h3 className={classes.InfoText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </h3>

                  <button
                    className={classes.HandleFavouritesBtn}
                    onClick={() => {
                      window.location = `albumPage/${albumKey}`;
                      dispatch(setSelectedAlbum(albums[albumKey]));
                      console.log(albums[albumKey]);
                    }}
                  >
                    View Images
                  </button>
                </div>
              </div>
            </div>
          ))
        : "No data / Loading..."}
    </div>
  );
};

export default SearchPage;
