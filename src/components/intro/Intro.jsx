import { useTranslation } from "react-i18next";
import "../styles/Intro.css";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="Intro_container">
      <div className="article">
        <div className="article_box1">
          <div className="title">
            <p>{t("intro.title")}</p>
          </div>
          <p className="sub_title">소개</p>
          <p className="content">{t("intro.intro_title")}</p>
        </div>
        <div className="article_box2">
          <div className="main_box">
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_1.svg" alt="회사명" />
              </div>
              <div className="bg_text">
                <span>{t("intro.company_name.value1")}</span>
                <p>{t("intro.company_name.value2")}</p>
              </div>
            </div>
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_2.svg" alt="설립연도" />
              </div>
              <div className="bg_text">
                <span>{t("intro.establishment_date")}</span>
                <p>2024.06.17</p>
              </div>
            </div>
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_3.svg" alt="본사 위치" />
              </div>
              <div className="bg_text">
                <span>{t("intro.headquarters.value1")}</span>
                <p>{t("intro.headquarters.value2")}</p>
              </div>
            </div>
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_4.svg" alt="인증현황" />
              </div>
              <div className="bg_text">
                <span>{t("intro.business_area.value1")}</span>
                <p>{t("intro.business_area.value2")}</p>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="bg_box2">
              <p className="sub_title">{t("intro.vision.value1")}</p>
              <p className="content">{t("intro.vision.value2")}</p>
            </div>
          </div>
        </div>
        <div className="article_box3">
          <p className="sub_title">{t("intro.core_values.value1")}</p>
          <div className="main_box2">
            <div className="bg_box3">
              <div>
                <img src="/img/Intro_5.svg" alt="고객 중심" />
              </div>
              <p>{t("intro.core_values.value2")} </p>
            </div>
            <div className="bg_box3">
              <div>
                <img src="/img/Intro_6.svg" alt="전문성" />
              </div>
              <p>{t("intro.core_values.value3")} </p>
            </div>
            <div className="bg_box3">
              <div>
                <img src="/img/Intro_7.svg" alt="솔루션" />
              </div>
              <p>{t("intro.core_values.value4")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
