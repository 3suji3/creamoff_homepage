import React from "react";
import "./styles/mobileIntro.css";

const MobileIntro = () => {
  return (
    <div className="mobile_intro_section">
      <div className="mobile_title">목표</div>
      <p>불필요함 down, 본질가치 up</p>
      <div className="article_container">
        <div className="article">
          <div className="img_box">
            <img src="" alt="" />
          </div>
          <p>사용자 중심의 간결한 경험을 설계합니다.</p>
        </div>
        <div className="article">
          <div className="img_box">
            <img src="" alt="" />
          </div>
          <p>사용자 중심의 간결한 경험을 설계합니다.</p>
        </div>
        <div className="article">
          <div className="img_box">
            <img src="" alt="" />
          </div>
          <p>사용자 중심의 간결한 경험을 설계합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default MobileIntro;
