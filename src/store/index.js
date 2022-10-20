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
import coinGeckoApi from "store/coinGeckoApiSlice";
import app from "store/appSlice";
import charts from "store/chartsSlice";
import table from "store/tableSlice";
import searchBar from "store/searchBarSlice";
import coinConverter from "store/coinConverterSlice";

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
  [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  app,
  charts: persistReducer(chartsPersistConfig, charts),
  table,
  searchBar,
  coinConverter,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(coinGeckoApi.middleware),
});
