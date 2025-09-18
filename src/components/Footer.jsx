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
        <div className="mobile_text">
          <p>© 2024 주식회사 크림오프. All rights reserved.</p>
          <p>사업자등록번호: 514-87-03021</p>
          <p>대표 권도혁</p>
          <p>주소: 경북 경산시 삼품로 27 경북청년창업지원센터 309호</p>
          <p>우편 번호: 38542</p>
          <p>전화: 070-4571-7580</p>
          <p>이메일: creamoff2021@naver.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
