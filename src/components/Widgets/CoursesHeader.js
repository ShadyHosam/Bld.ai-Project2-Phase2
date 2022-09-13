import { React, useContext } from "react";
import { IDContext } from "../../Contexts/CourseIDContext";
import { CourseContext } from "../../Contexts/CoursesContext";
function CoursesHeader() {
  const { id } = useContext(IDContext);
  const { summary } = useContext(CourseContext);
  return (
    <div className="courses-header-text">
      <div className="title">{summary[id].header}</div>
      <div className="details">{summary[id].description}</div>
      <button type="button" className="Explore-btn">
        Explore {summary[id].title}
      </button>
    </div>
  );
}

export default CoursesHeader;
