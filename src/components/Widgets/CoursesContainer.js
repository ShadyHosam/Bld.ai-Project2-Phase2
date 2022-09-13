import { React, useContext } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { CourseContext } from "../../Contexts/CoursesContext";
import { IDContext } from "../../Contexts/CourseIDContext";
function CoursesContainer({ searchVal }) {
  const { summary } = useContext(CourseContext);
  const { id } = useContext(IDContext);
  let tmp = summary[id].items;
  let arr = [tmp[0], tmp[1], tmp[2], tmp[3], tmp[7]];
  const Filtered_Courses = arr.filter((course) =>
    course.title.toLowerCase().includes(searchVal.toLowerCase())
  );
  return (
    <div class="course-preview-container">
      {Filtered_Courses.map((course, index) => {
        return (
          <Link key={index} to={`/course/${course.id}`}>
            <CourseCard key={index} course={course} />
          </Link>
        );
      })}
    </div>
  );
}

export default CoursesContainer;
