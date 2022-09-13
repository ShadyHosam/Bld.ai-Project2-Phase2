import { React, useState } from "react";
import { IDContext } from "../../Contexts/CourseIDContext";
import "../../Styles/HomePage/Main.css";
import CoursesBox from "../Widgets/CoursesBox";
function Main({ searchVal }) {
  const [id, setid] = useState(0);
  return (
    <main>
      <section>
        <div className="course-text-container">
          <p className="course-selection">A broad selection of courses</p>
          <p className="course-intro">
            Choose from 185,000 online video courses with new additions
            published every month
          </p>
        </div>
        <ul className="course-related-topics">
          <li className="listOfCourses active">
            <a href="#">Python</a>
          </li>
          <li className="listOfCourses">
            <a href="#">Excel</a>
          </li>
          <li className="listOfCourses">
            <a href="#">Web Development</a>
          </li>
          <li className="listOfCourses">
            <a href="#">JavaScript</a>
          </li>
          <li className="listOfCourses">
            <a href="#">Data Science</a>
          </li>
          <li className="listOfCourses">
            <a href="#">AWS Certificate</a>
          </li>
          <li className="listOfCourses">
            <a href="#">Drawing</a>
          </li>
        </ul>
      </section>
      <IDContext.Provider value={{ id }}>
        <CoursesBox searchVal={searchVal} />
      </IDContext.Provider>
    </main>
  );
}

export default Main;
