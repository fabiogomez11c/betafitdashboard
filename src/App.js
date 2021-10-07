import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";

import { store } from "./reducers/store";

// TODO remove all the absolute dimensions and use rem instead of px.

function App() {
  return (
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
  );
}

export default App;

