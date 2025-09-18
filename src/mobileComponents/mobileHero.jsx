import React from "react";
import "./styles/mobileHero.css";

const MobileHero = () => {
  return (
    <div className="mobile_hero_section">
      <div className="video_box">
        <video />
      </div>
      <p>
        반려동물 케어,
        <br />더 <span>똑똑</span>하게
      </p>
      <div className="btn_box">
        <div className="btn">제품 알아보기 →</div>
        <div className="btn">
          <img src="" alt="" />
          <p>Google Play</p>
        </div>
        <div className="btn">
          <img src="" alt="" />
          <p>App Store</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
