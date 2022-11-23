import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/store"
import { Provider } from "react-redux";
import axios from "axios";
//import { Link } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_VERCEL_URL || "https://backend-edye.herokuapp.com";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="header">
        <div id="navbar">
          <a id="item-navbar" href='/'>Home</a>
          <a id="item-navbar" href={"/addpokemon"}>Create</a>
          <a id="item-navbar" href={"/about"}>About</a>
        </div>
      </div>
        <App />
      <div className="footer">
        <p>© 2022 Soy Henry | All rights reserved.</p>
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);