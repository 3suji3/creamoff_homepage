import React, { useState } from "react";
import axios from "axios";
import "./styles/mobileNews.css";

const MobileNews = () => {
  const [addEmail, setAddEmail] = useState("");

  const onChangeAddEmail = (e) => {
    setAddEmail(e.target.value);
  };

  const isValidEmail = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  };

  const onAddSubmit = async () => {
    // 이메일 유효성 검사
    if (!addEmail.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!isValidEmail(addEmail)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:80";
      const response = await axios.post(`${apiUrl}/addList`, {
        email: addEmail,
      });
      if (response.status === 200) {
        setAddEmail("");
        alert("성공적으로 구독하였습니다.");
      }
    } catch (e) {
      console.error(e);
      alert("이메일 등록 중 오류가 발생했습니다.");
    }
  };
  return (
    <div className="mobile_news_section">
      <div className="news_content">
        <p>뉴스레터 구독</p>
        <p>Talktail의 최신 소식과 반려동물 정보를 이메일로 받아보세요.</p>
        <input
          value={addEmail}
          onChange={onChangeAddEmail}
          type="email"
          placeholder="이메일 주소를 입력하세요"
        />
        <button type="submit" onClick={onAddSubmit}>
          구독하기
        </button>
      </div>
    </div>
  );
};

export default MobileNews;
