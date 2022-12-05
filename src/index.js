import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import axios from "axios";

import App from './App';
import store from "./Redux/store"

axios.defaults.baseURL = process.env.REACT_APP_VERCEL_URL || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);