import React from "react";
import { Route, Routes } from "react-router-dom";
import { PUBLIC__ROUTES } from "./routes";
import Notfount from "./Components/404/notfount";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {PUBLIC__ROUTES?.map(({ element, path }) => (
          <Route element={element} path={path} />
        ))}
        <Route path="*" element={<Notfount />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
