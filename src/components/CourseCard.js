import { React, useContext, useRef, useEffect } from "react";
import { IDContext } from "../Contexts/CourseIDContext";
import { CourseContext } from "../Contexts/CoursesContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import PopOverCard from "./PopOverCard";
function CourseCard({ idx }) {
  const { id } = useContext(IDContext);
  const { summary } = useContext(CourseContext);
  let arr = summary[id].items;
  console.log(arr);
  const popover = (props) => (
    <Popover {...props}>
      <PopOverCard summary={arr[idx]} />
    </Popover>
  );
  return (
    <OverlayTrigger
      className="tippycard"
      overlay={popover}
      placement="top-end"
      trigger={["hover"]}
    >
      <div className="course-preview" id={arr[idx].id}>
        <div className="course-img">
          <a href="#">
            <img src={arr[idx].image_480x270} alt="" />
          </a>
        </div>
        <div className="course-info">
          <div className="course-description">{arr[idx].title}</div>
          <div className="course-author">
            {arr[idx].visible_instructors.map((element, i) => {
              let tmp = element.title;
              if (i != arr[idx].visible_instructors.length - 1) tmp += ", ";
              return tmp;
            })}
          </div>
          <div className="course-rate">
            <span className="checked">
              {Math.round(10 * arr[idx].avg_rating_recent) / 10}
            </span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star-half-full checked"></span>
            <span className="students">({arr[idx].num_reviews})</span>
          </div>
          <span className="course-price">
            {arr[idx].price.discount_price.price_string}
          </span>
          <span classNameName="course-price old">
            {arr[idx].price.list_price.price_string}
          </span>
        </div>
      </div>
    </OverlayTrigger>
  );
}

export default CourseCard;
