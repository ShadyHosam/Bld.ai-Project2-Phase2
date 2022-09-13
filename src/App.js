import { React, useState, useEffect } from "react";
import { CourseContext } from "./Contexts/CoursesContext";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Widgets/Nav";
import Footer from "./components/Widgets/Footer";
import Home from "./pages/Home/Home";
import CoursePage from "./pages/CoursePage/CoursePage";
import LoadingSpinner from "./components/Atoms/LoadingSpinner";
import "../src/App.css";
function App() {
  const [data, setdata] = useState([]);
  const [summary, setsummary] = useState([]);
  const [review, setreview] = useState([]);
  const [searchVal, setSearchVal] = useState("");
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
        <Nav setSearchVal={setSearchVal} />
        <CourseContext.Provider value={{ data, summary, review }}>
          <Routes>
            <Route path="/" element={<Home searchVal={searchVal} />} />
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
        </CourseContext.Provider>
        <Footer />
      </>
    );
  } else {
    return <LoadingSpinner />;
  }
}

export default App;
