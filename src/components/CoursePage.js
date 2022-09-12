import { React, useContext, useState } from "react";
import { CourseContext } from "../Contexts/CoursesContext";
import { useParams } from "react-router-dom";
import "../components_styles/CoursePage.css";
import CoursePageHeader from "./CoursePageHeader";
import CourseContent from "./CourseContent";
import CourseInfo from "./CourseInfo";
import Instructors from "./Instructors";
import Reviews from "./Reviews";
function CoursePage() {
  const { id } = useParams();
  const { data } = useContext(CourseContext);
  const { summary } = useContext(CourseContext);
  const { review } = useContext(CourseContext);
  const getidx = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == val) return i;
    }
  };
  const obj_data = { ...data[getidx(data, id)] };
  const obj_rev = { ...review[getidx(review, id)] };
  const obj_sum = { ...summary[0].items[[getidx(summary[0].items, id)]] };
  const CalcRate = (rate) => {
    let x = Math.floor(rate);
    const StarsArr = [];
    for (let i = 0; i < x; i++) {
      let star = `<span className="fa fa-star checked"> </span> `;
      StarsArr.push(star);
    }
    if (x != rate)
      StarsArr.push(`<span className="fa fa-star-half-full checked"> </span> `);
    while (StarsArr.length < 5) {
      StarsArr.push(`<span className="not fa fa-star"> </span>`);
    }
    return StarsArr;
  };
  return (
    <>
      <CoursePageHeader
        obj_sum={obj_sum}
        obj_data={obj_data}
        CalcRate={CalcRate}
      />
      <div className="page-contianer">
        <CourseContent obj_sum={obj_sum} obj_data={obj_data} />
        <CourseInfo obj_data={obj_data} />
        <Instructors obj_sum={obj_sum} />
        <Reviews obj_rev={obj_rev} CalcRate={CalcRate} />
      </div>
    </>
  );
}

export default CoursePage;
