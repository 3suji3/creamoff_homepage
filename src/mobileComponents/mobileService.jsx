import React from "react";
import "./styles/mobileService.css";

const MobileService = () => {
  return (
    <div className="mobile_service_section">
      <div className="mobile_title ">Solution</div>
      <div className="content">
        <p>반려동물 웨어러블 디바이스</p>
        <div className="img_box">
          <img src="./img/Service_10.png" alt="Pet wearable devices" />
        </div>
        <div className="article_container">
          <div className="article_img">
            <img src="./img/Service_12.svg" alt="temperature" />
            <span>체온</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_3.svg" alt="heart rate" />
            <span>심박수</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_13.svg" alt="oxygen saturation" />
            <span>산소포화도</span>
          </div>
          <div className="article_img">
            <img
              src="./img/Service_14.svg"
              alt="Anomaly detection and notification"
            />
            <span>이상 징후 감지 및 알림</span>
          </div>
        </div>
        <div>자세히 보기 →</div>
      </div>
      <div className="content">
        <p>반려동물 웨어러블 디바이스</p>
        <div className="img_box">
          <img src="./img/Service_10.pn" alt="Pet wearable devices" />
        </div>
        <div className="article_container">
          <div className="article_img">
            <img src="" alt="temperature" />
            <span>체온</span>
          </div>
          <div className="article_img">
            <img src="" alt="heart rate" />
            <span>심박수</span>
          </div>
          <div className="article_img">
            <img src="" alt="oxygen saturation" />
            <span>산소포화도</span>
          </div>
          <div className="article_img">
            <img src="" alt="Anomaly detection and notification" />
            <span>이상 징후 감지 및 알림</span>
          </div>
        </div>
        <div>자세히 보기 →</div>
      </div>
    </div>
  );
};

export default MobileService;
