import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { usersApi } from "./usersApi";
import { usersReducer } from "./usersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
const usersPersistConfig = {
  key: "following",
  storage,
  whitelist: ["following"],
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    users: persistReducer(usersPersistConfig, usersReducer),
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware),
});

export const persistor = persistStore(store);
