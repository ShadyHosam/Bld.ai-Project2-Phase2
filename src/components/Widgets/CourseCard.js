import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import PopOverCard from "./PopOverCard";
function CourseCard({ course }) {
  let key = 0;
  const popover = (props) => (
    <Popover {...props}>
      <PopOverCard key={key++} summary={course} />
    </Popover>
  );
  return (
    <OverlayTrigger
      className="tippycard"
      overlay={popover}
      placement="top-end"
      trigger={["hover"]}
    >
      <div className="course-preview">
        <div className="course-img">
          <img src={course.image_480x270} alt="" />
        </div>
        <div className="course-info">
          <div className="course-description">{course.title}</div>
          <div className="course-author">
            {course.visible_instructors.map((element, i) => {
              let tmp = element.title;
              if (i != course.visible_instructors.length - 1) tmp += ", ";
              return tmp;
            })}
          </div>
          <div className="course-rate">
            <span className="checked">
              {Math.round(10 * course.avg_rating_recent) / 10}
            </span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star-half-full checked"></span>
            <span className="students">({course.num_reviews})</span>
          </div>
          <span className="course-price">
            {course.price.discount_price.price_string}
          </span>
          <span className="course-price old">
            {course.price.list_price.price_string}
          </span>
        </div>
      </div>
    </OverlayTrigger>
  );
}

export default CourseCard;
