import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// Reducers imports
import app from "store/appSlice";
import charts from "store/chartsSlice";
import table from "store/tableSlice";

const chartsPersistConfig = {
  key: "charts",
  storage,
  whitelist: ["activeButton"],
};

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["app"],
  blacklist: ["charts"],
};

const reducer = combineReducers({
  app,
  charts: persistReducer(chartsPersistConfig, charts),
  table,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
