import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import Home from "../pages/Home";

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wordle" element={<Main />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
