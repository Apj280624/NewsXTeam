import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

// my modules
import Home from "./routes/Home.jsx";
import { routes } from "./utilities/Vars.js";

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
