import React from "react";
import "./styles/mobileIntro.css";

const MobileIntro = () => {
  return (
    <div className="mobile_intro_section">
      <div className="mobile_title">About Us</div>
      <p>덜어낼수록 선명해지는 본질</p>
      <div className="article_container">
        <div className="article">
          <div className="img_box">
            <img src="./img/Intro_5.svg" alt="user" />
          </div>
          <p>사용자 중심의 간결한 경험을 설계합니다.</p>
        </div>
        <div className="article">
          <div className="img_box">
            <img src="./img/Intro_6.svg" alt="" />
          </div>
          <p>기술과 디자인의 균형으로 새로운 기준을 만듭니다.</p>
        </div>
        <div className="article">
          <div className="img_box">
            <img src="./img/Intro_7.svg" alt="" />
          </div>
          <p>복잡함을 덜고, 효율을 높이는 솔루션을 제공합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default MobileIntro;
