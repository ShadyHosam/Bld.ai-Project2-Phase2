import React from "react";
import Instructor from "./Instructor";
import "../../Styles/Instructor/instructor.css";
function Instructors({ obj_sum }) {
  let instructor_arr = obj_sum.visible_instructors;
  return (
    <div className="instructors">
      <h2 className="h2-inst">Instructors</h2>
      {instructor_arr.map((instructor, index) => {
        return <Instructor key={index} instructor={instructor} />;
      })}
    </div>
  );
}

export default Instructors;
