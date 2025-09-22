import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./styles/Header.css";

const languages = [
  { code: "", value: "", label: "", icon: "/img/Header_2.svg" },
  { code: "kr", value: "KR", label: "한국어", icon: "/img/KR.png" },
  { code: "en", value: "US", label: "English", icon: "/img/US.png" },
];

const CustomLanguageSelect = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef(null);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (lang) => {
    setSelected(lang);
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom_select" ref={dropdownRef}>
      <div className="selected" onClick={toggleOpen}>
        <img
          src="/img/Header_2.svg"
          alt={selected.label}
          className={`select ${selected.label === "" ? "no" : ""}`}
        />
        <span>{selected.value}</span>
      </div>

      {open && (
        <div className="options">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`option ${lang.label === "" ? "icon" : ""}`}
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.icon} alt={lang.label} />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomLanguageSelect;
