import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import SocketProvider from "./Context/socketProvider";
import ResponsiveProvider from "./Context/responsiveProvider";
import {CloudinaryContext} from 'cloudinary-react';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
              <SocketProvider>
                  <ResponsiveProvider>
                      <App />
                  </ResponsiveProvider>
              </SocketProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
