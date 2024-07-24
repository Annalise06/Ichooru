import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../pages/Ichooru/Landing/Footer";
import Homepage from "./Ichooru/Landing/Home/Homepage";
import Helper from "./Ichooru/Landing/Test/helper";

const Pages = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="/test-homepage" element={<Helper/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default Pages;
