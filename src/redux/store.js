
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ProductApi from "./services/ProductApi";
import ReviewApi from "./services/ReviewApi";
import authReducer from "./slice/AuthSlice";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) {
      return undefined; // Return undefined if no state found
    }
    return JSON.parse(serializedState); // Parse and return the stored state
  } catch (err) {
    console.error("Failed to load state", err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("authState", serializedState); // Save state in localStorage
  } catch (err) {
    console.error("Failed to save state", err);
  }
};

// Load persisted state
const persistedState = loadState();

// Configure the store, initializing with the persisted state
const store = configureStore({
  reducer: {
    auth: authReducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [ReviewApi.reducerPath]: ReviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
  preloadedState: {
    auth: persistedState?.auth || {
      user: null,
      token: null,
      isLoggedIn: false,
      isVerified: false, // Ensure IsVerified is included in preloaded state
    },
  },
});

// Subscribe to store changes to save updated state to localStorage
store.subscribe(() => {
  saveState({
    auth: store.getState().auth, // Save the entire auth slice to localStorage
  });
});

export default store;
