import React from "react";
import "./CssGrid.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";

function CssGrid() {
  return (
    <div className="CssGrid">
      <h1>i am CssGrid component</h1>
      <div className="CssGrid_img">
        <div className="img_container">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CssGrid;
