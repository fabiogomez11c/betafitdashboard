import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { Provider } from "react-redux";

import store from "./reducers/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter/>
      </div>
    </Provider>    
  );
}

export default App;
