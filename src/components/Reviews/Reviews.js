import { React, useState } from "react";
import Review from "./Review";
function Reviews({ obj_rev, CalcRate }) {
  let reviews = obj_rev.results;
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore ? reviews.length : Math.min(5, reviews.length);
  const onShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="Reviews">
      <h2>Reviews</h2>
      <input
        className="Reviews-search-bar"
        type="text"
        placeholder="Search reviews"
      />
      <button className="Reviews-btn">
        <i
          class="fa fa-search"
          aria-hidden="true"
          style={{ color: "white" }}
        ></i>
      </button>
      {reviews.slice(0, numberOfItems).map((review, index) => {
        return <Review key={index} review={review} CalcRate={CalcRate} />;
      })}
      <button className="showMore" onClick={onShowMore}>
        Show {showMore ? "less" : "more"} Reviews
      </button>
    </div>
  );
}

export default Reviews;
