import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import SearchPage from "./components/searchPage/SearchPage";
import SingleAlbumPage from "./components/singleAlbumPage/SingleAlbumPage";

import classes from "./App.module.scss";

const App = () => {
  const [selectedAlbum, setSelectedAlbum] = useState();
  useEffect(() => {
    if (
      localStorage.getItem("accessToken")?.length === 0 ||
      window.location.href === "http://localhost:3000" ||
      window.location.href === "http://localhost:3000/"
    ) {
      window.location = "/homePage";
    }
  }, []);
  return (
    <div className={classes.MainContainer}>
      <Navbar />
      <Routes>
        <Route path="/homePage" element={<HomePage />} />
        <Route
          path="/albumPage/:albumId"
          element={<SingleAlbumPage selectedAlbum={selectedAlbum} />}
        />
        <Route
          path="/searchPage"
          element={<SearchPage setSelectedAlbum={setSelectedAlbum} />}
        />
      </Routes>
    </div>
  );
};

export default App;
