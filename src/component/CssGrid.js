import React, { useEffect } from "react";
import "./CssGrid.css";
import gsap from "gsap";
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
  useEffect(() => {
    gsap.from(".img_container", {
      duration: 5,
      delay: 2,
      opacity: 0,
      stagger: {
        each: 0.5,
        from: "start",
      },
      ease: "elastic.out(1, 0.3)",
      x: "200px",
    });
  }, []);

  return (
    <div className="CssGrid">
      <div className="CssGrid_img">
        <div className="img_container img1 ">
          <img className="imgg" src={img1} alt="" />
        </div>
        <div className="img_container img2">
          <img className="imgg" src={img2} alt="" />
        </div>
        <div className="img_container img3">
          <img className="imgg" src={img3} alt="" />
        </div>
        <div className="img_container img4">
          <img className="imgg" src={img4} alt="" />
        </div>
        <div className="img_container img5">
          <img className="imgg" src={img5} alt="" />
        </div>
        <div className="img_container img6">
          <img className="imgg" src={img6} alt="" />
        </div>
        <div className="img_container img7">
          <img className="imgg" src={img7} alt="" />
        </div>
        <div className="img_container img8">
          <img className="imgg" src={img8} alt="" />
        </div>
        <div className="img_container img9">
          <img className="imgg" src={img9} alt="" />
        </div>
        <div className="img_container img10">
          <img className="imgg" src={img10} alt="" />
        </div>
        <div className="img_container img11">
          <img className="imgg" src={img11} alt="" />
        </div>
        <div className="img_container img12">
          <img className="imgg" src={img12} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CssGrid;
