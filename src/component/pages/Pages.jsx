import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../pages/Ichooru/Landing/Footer";
import Homepage from "./Ichooru/Landing/Home/Homepage";

const Pages = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;
