import React from "react";
import "../../Styles/HomePage/header.css";
function Header() {
  return (
    <header>
      <div className="img-header-cont">
        <img
          className="cart-img"
          alt=""
          src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg"
          width="1340"
          height="400"
        />
      </div>
      <div className="header-cart">
        <h1 className="txt1">New to Udemy? Lucky you.</h1>
        <p className="txt2">
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
    </header>
  );
}

export default Header;
