import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import { Provider } from "react-redux";
// import { store } from "./redux/store";
import { store } from "./reduxAsync/store";
import './index.css';
import { AppAsync } from 'components/AppAsync';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      {/* <Provider store={store}> */}
      <Provider store={store}>
      {/* <App /> */}
      <AppAsync/>
      </Provider>
      {/* </Provider> */}
  </React.StrictMode>

);
