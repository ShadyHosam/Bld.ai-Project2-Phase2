import Nav from "./components/Nav";
import axios from "axios";
import { React, useState, useEffect } from "react";
import { CourseContext } from "./Contexts/CoursesContext";
import CoursePage from "./components/CoursePage";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "../src/App.css";
function App() {
  const [data, setdata] = useState([]);
  const [summary, setsummary] = useState([]);
  const [review, setreview] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/summary").then((res) => {
      setsummary(res.data);
    });
    axios.get("http://localhost:8000/data").then((res) => {
      setdata(res.data);
    });
    axios.get("http://localhost:8000/review").then((res) => {
      setreview(res.data);
    });
  }, []);
  if (summary.length && data.length && review.length) {
    return (
      <>
        <Nav />
        <CourseContext.Provider value={{ data, summary, review }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
        </CourseContext.Provider>
        <Footer />
      </>
    );
  } else {
    return (
      <div class="d-flex justify-content-center mt-4">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default App;
