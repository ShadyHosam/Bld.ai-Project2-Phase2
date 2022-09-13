import { React, useState } from "react";
import "../../Styles/CoursePage/Review.css";
import parse from "html-react-parser";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
function Review({ review, CalcRate }) {
  let txt = review.content;
  const [showMore, setMhowMore] = useState(0);
  let len = 280;
  return (
    <div className="review_card">
      <div className="user-review">
        <div className="initials-col d-none d-md-block">
          <div className="initials">
            <span>{review.user.initials}</span>
          </div>
        </div>
        <div>
          <h5 className="user-name">{review.user.public_display_name}</h5>
          <div className="user-stars">
            {CalcRate(review.rating).map((cls) => {
              return parse(cls);
            })}
          </div>
          <p className="user-comment">
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
          </p>
          <p className="was-review-helpful">Was this review helpful?</p>
          <div className="react-buttons">
            <button className="thumbs-btn">
              <HiOutlineThumbUp />
            </button>
            <button className="thumbs-btn">
              <HiOutlineThumbDown style={{ transform: "scale(-1, 1)" }} />
            </button>
            <a href="/#" className="report-user">
              Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
