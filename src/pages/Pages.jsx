import React from "react"
import Home from "./Home"
import Cuisine from "./Cuisine";
import MealSelection from "./MealSelection";
import {Route, Routes} from "react-router-dom";

function Pages() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal-selection/:date" element={<MealSelection />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>

  );
}

export default Pages
