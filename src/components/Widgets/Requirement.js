import React from "react";
import parse from "html-react-parser";
import "../../Styles/CoursePage/requirement.css";
function Requirement({ obj_data }) {
  let req = obj_data.details.Requirements;
  return (
    <div className="requirement">
      <h2>Requirements</h2>
      <ul>
        {req.map((element, index) => {
          return parse(`<li key = ${index}> ${element}</li>`);
        })}
      </ul>
    </div>
  );
}

export default Requirement;
