import React from "react";
import App from "./App";
import './index.css';
import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <App/>
    </Provider>
    <Toaster/>
  </React.StrictMode>
)


