import React from 'react';
import './index.css';
import App from './App';
import store from "./app/store";
import { Provider } from "react-redux";
import { render } from 'react-dom';


render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
