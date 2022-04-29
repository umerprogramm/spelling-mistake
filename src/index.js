import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import {Store} from './store/Store';
import {Provider} from 'react-redux'
Store.subscribe(()=>console.log(Store.getState()))


ReactDOM.render(
  <React.StrictMode>
       <Provider store={Store}>
    <MoralisProvider serverUrl="https://fpcx7e5qy9iv.usemoralis.com:2053/server" appId="3lusXaDBXYNu5TuG1lpYX0sgDKfYFG9Cu3AAMMoJ">
      <App />
    </MoralisProvider>
       </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
