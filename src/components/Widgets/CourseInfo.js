import React from "react";
import Requirement from "../Widgets/Requirement";
import CourseDescription from "../Widgets/CourseDescription";
function CourseInfo({ obj_data }) {
  return (
    <>
      <Requirement obj_data={obj_data} />
      <CourseDescription obj_data={obj_data} />
    </>
  );
}

export default CourseInfo;
