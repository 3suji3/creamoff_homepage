import { useTranslation } from "react-i18next";
import "../styles/Hero.css";
import "../css/mobile.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="Hero_container">
      <div className="article">
        <div className="first_video_box">
          <video muted autoPlay loop>
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="first_text_box">
          <p className="article_box1_p1">
            {t("hero.first.title1")} <br />
            {t("hero.first.title2")} <span>{t("hero.first.title3")}</span>
            {t("hero.first.title4")}
          </p>
        </div>
        <div className="article_box1">
          <p>{t("hero.title1")}</p>
          <p className="article_box1_p1">
            {t("hero.title2")}
            <br />
            <span>{t("hero.title3")}</span>
            {t("hero.title4")}
          </p>
          <p className="article_box1_p2">{t("hero.description")}</p>
          <div className="button_container">
            <div className="button_box">
              <div className="box1">
                <span>{t("hero.button")}</span>
              </div>
            </div>
            <div className="button_box">
              <div className="box2">
                <img src="/img/Hero_1.svg" alt="GooglePlay" />
                <span>Google Play</span>
              </div>
              <div className="box2">
                <img src="/img/Hero_3.svg" alt="AppStore" />
                <span>App Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="article_box2">
          <video muted autoPlay loop>
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
