import React from "react";
import "./styles/mobileIntro.css";
import { useTranslation } from "react-i18next";

const MobileIntro = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile_intro_section">
      <div className="mobile_title">About Us</div>
      <p>{t("mobile_intro.subtitle")}</p>
      <div className="article_container">
        <div className="article">
          <div className="img_box">
            <img src="./img/Intro_5.svg" alt="user" />
          </div>
          <p>{t("mobile_intro.articles.text1")}</p>
        </div>
        <div className="article">
          <div className="img_box">
            <img src="./img/Intro_6.svg" alt="" />
          </div>
          <p>{t("mobile_intro.articles.text2")}</p>
        </div>
        <div className="article">
          <div className="img_box">
            <img src="./img/Intro_7.svg" alt="" />
          </div>
          <p>{t("mobile_intro.articles.text3")}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileIntro;
