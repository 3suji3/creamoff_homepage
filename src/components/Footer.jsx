import { useTranslation } from "react-i18next";
// import React, { useState, useEffect } from "react";
import "./styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const [width, setWidth] = useState(null);

  // useEffect(() => {
  //   // 초기 width 설정
  //   setWidth(window.innerWidth);

  //   // resize 이벤트 핸들러
  //   const handleResize = () => setWidth(window.innerWidth);

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <div className="Footer_container">
      <div className="article">
        <div className="article_box1">
          <div className="title_box">
            <p>Talktail</p>
            <p>{t("footer.brand.description")}</p>
          </div>
          <div className="link_container">
            <div className="link_box">
              <p>{t("footer.links.quick")}</p>
              <div>
                <p onClick={() => scrollToSection("intro")}>
                  {t("footer.links.intro")}
                </p>
                <p onClick={() => scrollToSection("service")}>
                  {t("footer.links.service")}
                </p>
                <p onClick={() => scrollToSection("connect")}>
                  {t("footer.links.connect")}
                </p>
              </div>
            </div>
            <div className="link_box">
              <p>{t("footer.legal.title")}</p>
              <div>
                <p>{t("footer.legal.terms")}</p>
                <p>{t("footer.legal.privacy")}</p>
                <p>{t("footer.legal.cookies")}</p>
                <p>{t("footer.legal.support")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="article_box2">
          <div>
            <p>{t("footer.copyright.text1")}</p>
            <p>{t("footer.copyright.text2")}</p>
          </div>
          <div>
            <p>{t("footer.copyright.text3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
