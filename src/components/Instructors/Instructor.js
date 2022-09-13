import { React, useState } from "react";
import parse from "html-react-parser";
function Instructor({ instructor }) {
  const [showMore, setMhowMore] = useState(0);
  let txt = instructor.description;
  let len = 300;
  return (
    <>
      <div className="instructor">
        <a href="#" className="instructor-name">
          {instructor.title}
        </a>
        <p className="instructor-brief">{instructor.job_title}</p>
        <div className="instructor-card">
          <img className="instructor-img" src={instructor.image_100x100} />
          <ul>
            <li>{instructor.Instructor_Rating} Instructor Rating</li>
            <li>{instructor.Reviews} Instructor Reviews</li>
            <li>{instructor.Students} Instructor Students</li>
            <li>{instructor.Courses} Courses</li>
          </ul>
        </div>
        <div className="instructor-desc">
          {showMore || txt.length < len
            ? parse(txt)
            : parse(`${txt.substring(0, len)}`)}
          {txt.length > len ? (
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

export default Instructor;
