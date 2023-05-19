import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
//import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import "./fonts/Montserrat-Regular.ttf";
import "./fonts/Montserrat-Medium.ttf";
import "./fonts/Montserrat-SemiBold.ttf";

//https://vadimvyalov.github.io/tech-project/
//import.meta.env.BASE_URL
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={"tech-project"}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
