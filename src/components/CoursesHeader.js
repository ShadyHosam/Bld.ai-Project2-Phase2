import { React, useContext } from "react";
import { IDContext } from "../Contexts/CourseIDContext";
import { CourseContext } from "../Contexts/CoursesContext";
function CoursesHeader() {
  const { id } = useContext(IDContext);
  const { summary } = useContext(CourseContext);
  return (
    <div class="courses-header-text">
      <div class="title">{summary[id].header}</div>
      <div class="details">{summary[id].description}</div>
      <button type="button" class="Explore-btn">
        Explore {summary[id].title}
      </button>
    </div>
  );
}

export default CoursesHeader;
