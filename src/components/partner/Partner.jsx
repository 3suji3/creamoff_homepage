import { useTranslation } from "react-i18next";
import "../styles/Partner.css";

const Partner = () => {
  const { t } = useTranslation();

  const logos = [
    "/img/Partner_1.png", // 24시센트럴동물메디컬센터
    "/img/Partner_2.jpg", // 군산24시 제일동물병원
    "/img/Partner_3.jpg", // 그린벨 동물의료센터
    "/img/Partner_4.png", // 닥터장 동물의료센터
    "/img/Partner_5.png", // 대구24시바른동물의료센터
    "/img/Partner_6.png", // 도그원동물의료센터
    "/img/Partner_7.jpeg", // 본바른동물의료센터
    "/img/Partner_8.jpg", // 오션동물메디컬센터
    "/img/Partner_9.png", // 조이동물의료센터
    "/img/Partner_10.png", // 조이동물의료센터
    "/img/Partner_11.jpg", // 지안동물의료센터
  ];

  return (
    <div className="Partner_container">
      <div className="article">
        <div className="article_box">
          <div className="title">
            <p>{t("partner.title")}</p>
          </div>
          <div className="logo_container">
            <div className="logo_wrapper">
              <div className="logo_slider">
                {logos.map((src, i) => (
                  <div className="logo_box" key={i}>
                    <img src={src} alt={`partner-${i}`} />
                  </div>
                ))}
                {logos.map((src, i) => (
                  <div className="logo_box" key={`repeat-${i}`}>
                    <img src={src} alt={`partner-repeat-${i}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
