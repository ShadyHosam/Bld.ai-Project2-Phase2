import Header from "./Header";
import Main from "./Main";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseContext } from "../Contexts/CoursesContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CoursePageHeader from "./CoursePage";
function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default Home;
