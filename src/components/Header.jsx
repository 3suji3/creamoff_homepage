import "./styles/Header.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomLanguageSelect from "./CustomLanguageSelect";

const Header = () => {
  const { t } = useTranslation();
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1440) return;
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isTop ? "visible" : "hidden"}`}>
      <div className="article">
        <div className="header_logo">
          <img src="/LOGO(svg).svg" alt="logo" />
        </div>
        <div className="header_nav">
          <p onClick={() => scrollToSection("intro")}>{t("header.about")}</p>
          <p onClick={() => scrollToSection("service")}>
            {t("header.solution")}
          </p>
          <p onClick={() => scrollToSection("connect")}>
            {t("header.contact")}
          </p>
        </div>
        <div className="header_language">
          <CustomLanguageSelect />
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <img src="/img/Header_4.svg" alt="x" />
          ) : (
            <img src="/img/Header_3.svg" alt="navigater" />
          )}
        </div>
      </div>
      {/* 모바일 */}
      <div className={`mobile_menu ${menuOpen ? "open" : ""}`}>
        {menuOpen && <div className="bglayout"></div>}
        <p onClick={() => scrollToSection("intro")}>{t("header.about")}</p>
        <p onClick={() => scrollToSection("service")}>{t("header.solution")}</p>
        <p onClick={() => scrollToSection("connect")}>{t("header.contact")}</p>
      </div>
    </div>
  );
};

export default Header;
