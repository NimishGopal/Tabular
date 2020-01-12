import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Pagination from "./src/containers/Pagination";
require("./src/less/index.less");

const App = () => (
  <Provider store={store}>
    <Pagination />
  </Provider>
);

export default App;
