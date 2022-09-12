import { React, useState } from "react";
import "../components_styles/Coursepgheader.css";
import parse from "html-react-parser";
import SideCard from "./SideCard";
function CoursePageHeader({ obj_sum, obj_data, CalcRate }) {
  const getperc = (NewPrice, OldPrice) => {
    let dif = ((OldPrice - NewPrice) / OldPrice) * 100;
    dif = Math.ceil(dif);
    return dif;
  };
  return (
    <>
      <div className="container-fluid page-header ">
        <div className="container-fluid page-header-content">
          <div className="path">
            <a href="">Development</a>
            <span className="arrow">&#10148;</span>
            <a href="">Programing Language</a>
            <span className="arrow">&#10148;</span>
            <a href="">Python</a>
          </div>
          <h1 className="crstitle">{obj_sum.title}</h1>
          <p className="crsheadline">{obj_sum.headline}</p>
          <div className="rate">
            <span className="checked">
              {Math.round(10 * obj_sum.avg_rating_recent) / 10}
            </span>
            {CalcRate(obj_sum.avg_rating_recent).map((cls) => {
              return parse(cls);
            })}
            <a className="str-rate" href="">
              ({obj_sum.num_reviews} ratings)
            </a>
            <span className="std">{obj_sum.num_subscribers} students</span>
          </div>
          <div className="authors">
            <span className="createdby">Created by</span>
            {obj_sum.visible_instructors.map((element, i) => {
              let tmp = ` <a href="">` + element.title + "</a>";
              if (i != obj_sum.visible_instructors.length - 1) tmp += ", ";
              return parse(tmp);
            })}
          </div>

          <div className="extra-data">
            <span className="lst-update">
              &#x2755; Last updated {obj_sum.last_update_date}{" "}
            </span>
            <span className="lang">
              <img
                className="lang-icon"
                src="../images/icons/lang.png"
                width={15}
                height={15}
              ></img>
              <span className="lang-txt"> English </span>
            </span>
            <span className="subtitle">
              <img
                className="sub-icon"
                src="../images/icons/sub.png"
                width={15}
                height={15}
              ></img>
              <span className="subtitle">English </span>
            </span>
          </div>
        </div>
        <SideCard getperc={getperc} obj_sum={obj_sum} />
      </div>
    </>
  );
}

export default CoursePageHeader;
