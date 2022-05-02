import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAlbum: [],
  favouritesAlbum: [],
};

export const albumsSlice = createSlice({
  name: "albumsSlice",
  initialState,
  reducers: {
    setSelectedAlbum: (state, action) => {
      state.selectedAlbum = action.payload;
    },
    addToFavourites: (state, action) => {
      state.favouritesAlbum = [...state.favouritesAlbum, action.payload];
    },
    removeFromFavourites: (state, action) => {
      state.favouritesAlbum = state.favouritesAlbum.filter(
        (album) => album.id !== action.payload
      );
    },
    isInFavourites: (state, action) => {
      let filteredArray = state.favouritesAlbum.filter(
        (album) => album.id !== action.payload
      );
      if (filteredArray.length) return true;
      return false;
    },
  },
});

export const {
  setSelectedAlbum,
  isInFavourites,
  addToFavourites,
  removeFromFavourites,
} = albumsSlice.actions;

export default albumsSlice.reducer;
