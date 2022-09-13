import { React, useState } from "react";
import "../../Styles/CoursePage/SideCard.css";
function SideCard({ getperc, obj_sum }) {
  const [x, setX] = useState(true);
  window.onscroll = () => {
    if (window.scrollY > 400) setX(false);
    if (window.scrollY < 350) setX(true);
  };
  return (
    <div className="card">
      <img
        src={obj_sum.image_480x270}
        class="card-img-top"
        style={{ display: x ? "block" : "none" }}
      ></img>
      <div className="card-body">
        <div className="card-price">
          <span className="cur-price">
            {obj_sum.price.discount_price.price_string}
          </span>
          <span className="old-price">
            {obj_sum.price.list_price.price_string}
          </span>
          <span className="diss-perc">
            {getperc(
              obj_sum.price.discount_price.amount,
              obj_sum.price.list_price.amount
            )}
            % off
          </span>
        </div>
        <button type="button" className="btn addtocart">
          Add to cart
        </button>
        <button type="button" className="btn buynow">
          Buy now
        </button>
        <div className="gurantee">30-Day-Money-Back gurantee</div>
        <div className="course-include">
          <span>This course includes:</span>
          <ul>
            <li>- {obj_sum.content_info_short} hours on-demand video</li>
            <li>- 1 article</li>
            <li>- 3 downloadable resources</li>
            <li>- Full lifetime access</li>
            <li>- Access on mobile and TV</li>
            <li>- Certificate of completion</li>
          </ul>
        </div>
        <div className="flx">
          <a href="#">Share</a>
          <a href="#">Gift this course</a>
          <a href="#">apply coupon</a>
        </div>
      </div>
      <div className="cont">
        <div>Training 5 or more people?</div>
        <p>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button type="button" className="btn buynow">
          Try Udemy Business
        </button>
      </div>
    </div>
  );
}

export default SideCard;
