import { React, useState } from "react";
import { IDContext } from "../Contexts/CourseIDContext";
import "../components_styles/Main.css";
import CoursesBox from "./CoursesBox";
function Main() {
  const [id, setid] = useState(0);
  return (
    <main>
      <section>
        <div class="course-text-container">
          <p class="course-selection">A broad selection of courses</p>
          <p class="course-intro">
            Choose from 185,000 online video courses with new additions
            published every month
          </p>
        </div>
        <ul class="course-related-topics">
          <li class="listOfCourses active">
            <a href="#">Python</a>
          </li>
          <li class="listOfCourses">
            <a href="#">Excel</a>
          </li>
          <li class="listOfCourses">
            <a href="#">Web Development</a>
          </li>
          <li class="listOfCourses">
            <a href="#">JavaScript</a>
          </li>
          <li class="listOfCourses">
            <a href="#">Data Science</a>
          </li>
          <li class="listOfCourses">
            <a href="#">AWS Certificate</a>
          </li>
          <li class="listOfCourses">
            <a href="#">Drawing</a>
          </li>
        </ul>
      </section>
      <IDContext.Provider value={{ id }}>
        <CoursesBox />
      </IDContext.Provider>
    </main>
  );
}

export default Main;
