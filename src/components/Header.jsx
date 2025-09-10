import "./styles/Header.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isTop, setIsTop] = useState(true);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
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
          <select name="language" id="lang" onChange={handleLanguageChange}>
            <option value="ko">{t("header.ko")}</option>
            <option value="en">{t("header.en")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
