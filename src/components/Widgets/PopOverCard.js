import React from "react";
import "../../Styles/HomePage/PopOverCard.css";
import parse from "html-react-parser";
function PopOverCard({ summary }) {
  return (
    <div className="course-Popover">
      <h2 style={{ fontWeight: "bold" }}>{summary.title}</h2>
      <p>{`Update ${summary.last_update_date}`}</p>
      <p className>
        <span>{`${summary.content_info} . `}</span>
        <span>{`${summary.instructional_level} . Subtitle`}</span>
      </p>
      <p>{summary.headline}</p>
      <div className="pop-buttons">
        <div className="course-objective">
          {summary.objectives_summary.map((el, i) => {
            return parse(`<p id=${i}> &#10003; ${el}</p>`);
          })}
        </div>
        <button className="pop-add-cart">Add to cart</button>

        <button className="pop-fav">
          <i class="fa fa-heart-o" style={{ fontSize: "25px" }}></i>
        </button>
      </div>
    </div>
  );
}

export default PopOverCard;
