import { configureStore } from "@reduxjs/toolkit";
import {contactReducer} from "./contactSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import  { filterReducer } from "./filtersSlice";

const persistConfig = {
  key: "contact",
  storage,
  whitelist: ["items"],
};
const contactPersistedReducer = persistReducer(persistConfig, contactReducer);
export const store = configureStore({
  reducer: {
        contacts: contactPersistedReducer,
      filters: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
