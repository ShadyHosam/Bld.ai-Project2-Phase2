import { React, useContext } from "react";
import { CourseContext } from "../../Contexts/CoursesContext";
import { useParams } from "react-router-dom";
import "../../Styles/CoursePage/CoursePage.css";
import CoursePageHeader from "../../components/Widgets/CoursePageHeader";
import CourseContent from "../../components/CourseContent/CourseContent";
import CourseInfo from "../../components/Widgets/CourseInfo";
import Instructors from "../../components/Instructors/Instructors";
import Reviews from "../../components/Reviews/Reviews";
function CoursePage() {
  const { id } = useParams();
  const { data } = useContext(CourseContext);
  const { summary } = useContext(CourseContext);
  const { review } = useContext(CourseContext);
  // get the index of the current course from the fetched data
  const getidx = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == val) return i;
    }
  };
  // assign to every object the data related to current course
  const obj_data = { ...data[getidx(data, id)] };
  const obj_rev = { ...review[getidx(review, id)] };
  const obj_sum = { ...summary[0].items[[getidx(summary[0].items, id)]] };
  //////////////////calc stars for the given rate////////////////////////
  const CalcRate = (rate) => {
    let x = Math.floor(rate);
    const StarsArr = [];
    let key = 0;
    for (let i = 0; i < x; i++) {
      let star = `<span key = ${key++} className="fa fa-star checked"> </span> `;
      StarsArr.push(star);
    }
    if (x != rate)
      StarsArr.push(
        `<span className="key = ${key++} fa fa-star fa-star-half-full checked"> </span> `
      );
    while (StarsArr.length < 5) {
      StarsArr.push(`<span key = ${key++} className="not fa fa-star"> </span>`);
    }
    return StarsArr;
  };
  return (
    <>
      <CoursePageHeader obj_sum={obj_sum} CalcRate={CalcRate} />
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
