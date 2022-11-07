import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// Reducers imports
import app from "store/appSlice";
import charts from "store/chartsSlice";
import coinConverter from "store/coinConverterSlice";
import coinGeckoApi from "store/coinGeckoApiSlice";
import searchBar from "store/searchBarSlice";
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
  [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  app,
  charts: persistReducer(chartsPersistConfig, charts),
  table,
  searchBar,
  coinConverter,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(coinGeckoApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
