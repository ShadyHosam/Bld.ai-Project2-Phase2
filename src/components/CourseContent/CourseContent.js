import React from "react";
import Accordion from "../Accordion/Accordion";
import "../../Styles/CoursePage/Coursepgheader.css";
import "../../Styles/CoursePage/CourseContent.css";
import parse from "html-react-parser";
function CourseContent({ obj_data }) {
  return (
    <div className="course-content">
      <div className="tmp">
        <h2>What you'll learn</h2>
        <div className="grid">
          {obj_data.details.overview.map((element, index) => {
            return parse(
              `<div key = ${index} className="itm"> &#10003; ${element}</div>`
            );
          })}
        </div>
      </div>
      <h2 className="txt">Course Content</h2>
      <span>
        {obj_data.curriculum_context.data.sections.length} Sections &#8226;{" "}
        {"  "}
        {obj_data.curriculum_context.data.num_of_published_lectures} Lectures
        &#8226;{" "}
        {obj_data.curriculum_context.data.estimated_content_length_text.substring(
          0,
          5
        )}
        m Total length{" "}
      </span>
      <Accordion obj_data={obj_data} />
    </div>
  );
}

export default CourseContent;
