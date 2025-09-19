import React from "react";
import "./styles/mobileNews.css";

const MobileNews = () => {
  return (
    <div className="mobile_news_section">
      <div className="news_content">
        <p>뉴스레터 구독</p>
        <p>Talktail의 최신 소식과 반려동물 정보를 이메일로 받아보세요</p>
        <input type="email" placeholder="이메일 주소를 입력하세요" />
        <button type="submit">구독하기</button>
      </div>
    </div>
  );
};

export default MobileNews;
