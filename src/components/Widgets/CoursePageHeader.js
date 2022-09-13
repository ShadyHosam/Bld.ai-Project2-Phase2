import React from "react";
import "../../Styles/CoursePage/Coursepgheader.css";
import parse from "html-react-parser";
import { MdNewReleases, MdLanguage, MdClosedCaption } from "react-icons/md";
import SideCard from "./SideCard";
function CoursePageHeader({ obj_sum, CalcRate }) {
  // get the percentage of disscount
  const getperc = (NewPrice, OldPrice) => {
    let dif = ((OldPrice - NewPrice) / OldPrice) * 100;
    dif = Math.ceil(dif);
    return dif;
  };
  return (
    <>
      <SideCard getperc={getperc} obj_sum={obj_sum} />
      <div className="page-header ">
        <div className="page-header-content">
          <div className="path">
            <a href="">Development</a>
            <span className="arrow">&#10148;</span>
            <a href="">Programing Language</a>
            <span className="arrow">&#10148;</span>
            <a href="">Python</a>
          </div>
          <img
            src={obj_sum.image_480x270}
            className="Courseheader-img hidden_items"
          />
          <p className="crstitle">{obj_sum.title}</p>
          <p className="crsheadline">{obj_sum.headline}</p>
          <div className="rate">
            <span className="checked num-rate">
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
            <div className="lst-update icon-flx">
              <MdNewReleases />
              <div>Last Update {obj_sum.last_update_date}</div>
            </div>
            <div className="lang icon-flx">
              <MdLanguage />
              <div>{obj_sum.locale.simple_english_title}</div>
            </div>
            <div>
              {obj_sum.has_closed_caption ? (
                <div className="subtitle icon-flx">
                  <MdClosedCaption />
                  <div>English</div>
                </div>
              ) : null}
            </div>
          </div>
          <h2 className="price-cover hidden_items">
            {obj_sum.price.discount_price.price_string}
          </h2>
          <button className="add-to-cart-cover hidden_items">
            Add to cart
          </button>
          <div className="money-back-cover hidden_items">
            30-Day Money-Back Guarantee
          </div>
          <div className="share-gift-apply-cover hidden_items">
            <a href="\#" className="links-cover hidden_items">
              Share
            </a>
            <a href="\#" className="links-cover hidden_items">
              Gift this course
            </a>
            <a href="\#" className="links-cover hidden_items">
              Apply Coupon
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursePageHeader;
