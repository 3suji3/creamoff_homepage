import { useTranslation } from "react-i18next";
import "../styles/Hero.css";

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
              <a
                href="/Tailing_제품소개서.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box1">
                  <span>{t("hero.button")}</span>
                </div>
              </a>
            </div>
            <div className="button_box">
              <a
                href="https://play.google.com/store/apps/details?id=com.talktail&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box2">
                  <img src="/img/Hero_1.svg" alt="GooglePlay" />
                  <span>Google Play</span>
                </div>
              </a>

              <a
                href="https://apps.apple.com/kr/app/talktail/id6746703880"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box2">
                  <img src="/img/Hero_3.svg" alt="AppStore" />
                  <span>App Store</span>
                </div>
              </a>
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
