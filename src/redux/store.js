import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import albumsReducer from "./slices/albumsReducer.js";

const persistConfig = {
  key: "root",
  storage,
};
const persistedAlbumsReducer = persistReducer(persistConfig, albumsReducer);
export const store = configureStore({
  reducer: {
    albums: persistedAlbumsReducer,
  },
});

export const persistor = persistStore(store);
