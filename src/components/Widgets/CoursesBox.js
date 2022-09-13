import React from "react";
import CoursesHeader from "./CoursesHeader";
import CoursesContainer from "./CoursesContainer";
function CoursesBox({ searchVal }) {
  return (
    <section className="courses">
      <CoursesHeader />
      <CoursesContainer searchVal={searchVal} />
    </section>
  );
}

export default CoursesBox;
