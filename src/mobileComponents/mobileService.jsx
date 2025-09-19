import React from "react";
import "./styles/mobileService.css";

const MobileService = () => {
  return (
    <div className="mobile_service_section">
      <div className="mobile_title ">Solution</div>
      <p>복잡함을 덜어낸 반려의 해답</p>
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
        <div className="more_button">자세히 보기 →</div>
      </div>
      <div className="content">
        <p>반려동물 피부 질환 AI 검출</p>
        <div className="img_box">
          <img src="./img/Service_10.png" alt="Pet wearable devices" />
        </div>
        <div className="article_container">
          <div className="article_img">
            <img src="./img/Service_6.svg" alt="temperature" />
            <span>문진 이미지 기반 분석</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_7.svg" alt="heart rate" />
            <span>10만장 이미지 학습</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_15.svg" alt="oxygen saturation" />
            <span>즉시 결과 전송</span>
          </div>
          <div className="article_img">
            <img
              src="./img/Service_8.svg"
              alt="Anomaly detection and notification"
            />
            <span>맞춤 병원 연계</span>
          </div>
        </div>
        <div className="more_button">자세히 보기 →</div>
      </div>
    </div>
  );
};

export default MobileService;
