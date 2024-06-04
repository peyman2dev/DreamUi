import React from "react";
import Sidebar from "../../Components/Reuse/Sidebar/Sidebar";
import Header from "../../Components/Reuse/Header/Header";
import { Route, Routes } from "react-router-dom";

function Docs() {
  return (
    <>
      <Header />
      <section className="container flex gap-5 h-[400vh]">
        <Sidebar />
        <section className="py-14">
          <Routes>
            <Route path="guide/introdunction" element/>
          </Routes>
        </section>
      </section>
    </>
  );
}

export default Docs;
