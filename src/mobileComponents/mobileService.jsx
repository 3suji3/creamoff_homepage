import React from "react";
import "./styles/mobileService.css";
import { useTranslation } from "react-i18next";

const MobileService = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile_service_section">
      <div className="mobile_title ">Solution</div>
      <p>{t("mobile_service.subtitle")}</p>
      <div className="content">
        <p>{t("mobile_service.wearable.title")}</p>
        <div className="img_box">
          <img src="./img/Service_10.png" alt="Pet wearable devices" />
        </div>
        <div className="article_container">
          <div className="article_img">
            <img src="./img/Service_12.svg" alt="temperature" />
            <span>{t("mobile_service.wearable.features.text1")}</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_3.svg" alt="heart rate" />
            <span>{t("mobile_service.wearable.features.text2")}</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_13.svg" alt="oxygen saturation" />
            <span>{t("mobile_service.wearable.features.text3")}</span>
          </div>
          <div className="article_img">
            <img
              src="./img/Service_14.svg"
              alt="Anomaly detection and notification"
            />
            <span>{t("mobile_service.wearable.features.text4")}</span>
          </div>
        </div>
        <div className="more_button">{t("mobile_service.wearable.button")}</div>
      </div>
      <div className="content">
        <p>{t("mobile_service.ai_diagnosis.title")}</p>
        <div className="img_box">
          <img src="./img/Service_16.png" alt="Pet wearable devices" />
        </div>
        <div className="article_container">
          <div className="article_img">
            <img src="./img/Service_6.svg" alt="temperature" />
            <span>{t("mobile_service.ai_diagnosis.features.text1")}</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_7.svg" alt="heart rate" />
            <span>{t("mobile_service.ai_diagnosis.features.text2")}</span>
          </div>
          <div className="article_img">
            <img src="./img/Service_15.svg" alt="oxygen saturation" />
            <span>{t("mobile_service.ai_diagnosis.features.text3")}</span>
          </div>
          <div className="article_img">
            <img
              src="./img/Service_8.svg"
              alt="Anomaly detection and notification"
            />
            <span>{t("mobile_service.ai_diagnosis.features.text4")}</span>
          </div>
        </div>
        <div className="more_button">
          {t("mobile_service.ai_diagnosis.button")}
        </div>
      </div>
    </div>
  );
};

export default MobileService;
