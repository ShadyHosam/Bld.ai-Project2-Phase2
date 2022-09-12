import { React, useContext } from "react";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";
import { CourseContext } from "../Contexts/CoursesContext";
import { IDContext } from "../Contexts/CourseIDContext";
function CoursesContainer() {
  const { summary } = useContext(CourseContext);
  const { data } = useContext(CourseContext);
  const { id } = useContext(IDContext);
  let arr = summary[id].items;
  return (
    <div class="course-preview-container">
      <Link to={`/course/${arr[0].id}`}>
        <CourseCard idx={0} />
      </Link>
      <Link to={`/course/${arr[1].id}`}>
        <CourseCard idx={1} />
      </Link>
      <Link to={`/course/${arr[2].id}`}>
        <CourseCard idx={2} />
      </Link>
      <Link to={`/course/${arr[3].id}`}>
        <CourseCard idx={3} />
      </Link>
      <Link to={`/course/${arr[7].id}`}>
        <CourseCard idx={7} />
      </Link>
    </div>
  );
}

export default CoursesContainer;
