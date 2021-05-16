import React from "react";
import "./styles/index.css";
import "./styles/styles.css";
import "./styles/font-awesome.css";
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
    const routes = useRoutes()
  return (
      <Router>
          <div>
              {routes}
          </div>
      </Router>
  )
}

export default App;
