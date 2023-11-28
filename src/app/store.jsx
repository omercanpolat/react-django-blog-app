import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogSlice";

//! configureStore metodu hem bir store olusturur hem de olsuturken farkli reducer'lari birlesitir.
const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //! Dev tool'u kapatmak icin kullanılan degisken
});

export default store;
