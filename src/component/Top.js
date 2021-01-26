import React, { useEffect } from "react";
import "./Top.css";
import gsap from "gsap";

function Top() {
  const t1 = gsap.timeline();

  useEffect(() => {
    t1.from(".top_h1", {
      duration: 2,
      ease: "elastic.out(1, 0.3)",
      y: "-200px",
      opacity: 0,
    });
  }, [t1]);

  return (
    <div className="top">
      <div className="top_title">
        <h1 className="top_h1">Grid Gallery</h1>
      </div>
    </div>
  );
}

export default Top;
