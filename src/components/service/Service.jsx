import "../styles/Service.css";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  return (
    <div className="Service_container">
      <div className="article">
        {/* 타이틀 영역 */}
        <div className="article_box1">
          <div className="title">
            <p>{t("service.title")}</p>
          </div>
          <p>{t("mobile_service.subtitle")}</p>
        </div>

        <div className="article_box2">
          <div className="main_box">
            {/* 웨어러블 (Talktail) 섹션 */}
            <div className="content_box">
              <div>
                <p>{t("service.wearable.title")}</p>
              </div>
              <div className="img_box">
                <div>
                  <p>{t("service.wearable.title")}</p>
                </div>
                <img
                  src="/img/Service_10.jpg"
                  alt={t("service.wearable.title")}
                />
              </div>

              <div className="content_box2">
                <div className="title_box">
                  <img src="/img/Service_1.png" alt="TalkTail" />
                  <span>Tailing</span>
                </div>
                <p>{t("service.wearable.description")}</p>

                <div className="icon_container">
                  <div className="icon_content">
                    <div className="icon_box">
                      <img
                        src="/img/Service_12.svg"
                        alt={t("service.wearable.icons.heart_rate.alt")}
                      />
                      <span>{t("mobile_service.wearable.features.text1")}</span>
                    </div>
                    <div className="icon_box">
                      <img
                        src="/img/Service_3.svg"
                        alt={t("service.wearable.icons.notification.alt")}
                      />
                      <span>{t("mobile_service.wearable.features.text2")}</span>
                    </div>
                    <div className="icon_box">
                      <img
                        src="/img/Service_13.svg"
                        alt={t("service.wearable.icons.app_connection.alt")}
                      />
                      <span>{t("mobile_service.wearable.features.text3")}</span>
                    </div>
                    <div className="icon_box">
                      <img
                        src="/img/Service_14.svg"
                        alt={t("service.wearable.icons.app_connection.alt")}
                      />
                      <span>{t("mobile_service.wearable.features.text4")}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="/Tailing_제품소개서.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="more_button">
                    <p>{t("service.more")}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* AI 진단 (Talktail Skincare AI) 섹션 */}
            <div className="content_box">
              <div>
                <p>{t("service.ai_diagnosis.title")}</p>
              </div>
              <div className="img_box">
                <div>
                  <p>{t("service.ai_diagnosis.title")}</p>
                </div>
                <img src="/img/Service_16.jpg" alt="img2" />
              </div>

              <div className="content_box2">
                <div className="title_box">
                  <img
                    src="/img/Service_2.png"
                    alt={t("service.ai_diagnosis.name")}
                  />
                  <span>Talktail Care</span>
                </div>
                <p>{t("service.ai_diagnosis.description")}</p>

                <div className="icon_container">
                  <div className="icon_content">
                    <div className="icon_box">
                      <img
                        src="/img/Service_6.svg"
                        alt={t("service.ai_diagnosis.icons.analysis.alt")}
                      />
                      <span>
                        {t("mobile_service.ai_diagnosis.features.text1")}
                      </span>
                    </div>
                    <div className="icon_box">
                      <img
                        src="/img/Service_7.svg"
                        alt={t("service.ai_diagnosis.icons.upload.alt")}
                      />
                      <span>
                        {t("mobile_service.ai_diagnosis.features.text2")}
                      </span>
                    </div>
                    <div className="icon_box">
                      <img
                        src="/img/Service_15.svg"
                        alt={t("service.ai_diagnosis.icons.hospital.alt")}
                      />
                      <span>
                        {t("mobile_service.ai_diagnosis.features.text3")}
                      </span>
                    </div>
                    <div className="icon_box">
                      <img
                        src="/img/Service_8.svg"
                        alt={t("service.ai_diagnosis.icons.hospital.alt")}
                      />
                      <span>
                        {t("mobile_service.ai_diagnosis.features.text4")}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.talktail.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="more_button">
                    <p>{t("service.more")}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
