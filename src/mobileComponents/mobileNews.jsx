import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./styles/mobileNews.css";

const MobileNews = () => {
  const { t } = useTranslation();
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
        <p>{t("connect.newsletter.title")}</p>
        <p>{t("connect.newsletter.description")}</p>
        <input
          value={addEmail}
          onChange={onChangeAddEmail}
          type="email"
          placeholder={t("connect.newsletter.placeholder")}
        />
        <button type="submit" onClick={onAddSubmit}>
          {t("connect.newsletter.button")}
        </button>
      </div>
    </div>
  );
};

export default MobileNews;
