import { React, useState } from "react";
import "../../Styles/CoursePage/CourseDescription.css";
import parse from "html-react-parser";
function CourseDescription({ obj_data }) {
  let desc = obj_data.details.description;
  let for_who = obj_data.details.for_who.split("<br>");
  for_who = for_who.map((item) => {
    return `<li>${item}</li>`;
  });
  for_who = `<ul className="for-who"> ${for_who} <ul/>`;
  const txt =
    desc + `<h2 className="for-who">Who this course is for:</h2>` + for_who;
  const [showMore, setMhowMore] = useState(0);
  return (
    <>
      <div className="course-description">
        <h2>Description</h2>
        <div className="descriptiontxt">
          {showMore || txt.length < 800
            ? parse(txt)
            : parse(`${txt.substring(0, 800)}`)}
          {txt.length > 800 ? (
            <span className="btn" onClick={() => setMhowMore(!showMore)}>
              {showMore ? parse(`Show less..`) : "Show more.."}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseDescription;
