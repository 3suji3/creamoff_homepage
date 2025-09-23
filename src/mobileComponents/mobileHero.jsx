import React from "react";
import "./styles/mobileHero.css";
import { useTranslation } from "react-i18next";

const MobileHero = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile_hero_section">
      <div className="video_box">
        <video autoPlay loop muted playsInline webkit-playsinline="true">
          <source src="/Hero.mp4" type="video/mp4" />
        </video>
      </div>
      <p>
        {t("mobile_hero.title1")}
        <br />
        {t("mobile_hero.title2")}
        <span>{t("mobile_hero.title3")}</span>
        {t("mobile_hero.title4")}
      </p>
      <div className="btn_box">
        <div className="btn">{t("mobile_hero.button")}</div>
        <div className="btn">
          <img src="./img/Hero_1.svg" alt="Google" />
          <p>Google Play</p>
        </div>
        <div className="btn">
          <img src="./img/Hero_3.svg" alt="App" />
          <p>App Store</p>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
