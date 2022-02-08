import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import ButtonA from "../ButtonA";
import Home from "../Home";

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/wordle" element={<ButtonA />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
