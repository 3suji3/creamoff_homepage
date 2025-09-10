import React, { useEffect, useState } from "react";
import "./styles/SectionNavigator.css";

const sections = ["intro", "service", "connect"];

const SectionNavigator = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target?.id) {
          const id = entry.target.id.trim();
          console.log("In view:", id);
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`section_navigator ${isScrolling ? "hidden" : ""}`}>
      {sections.map((id) => {
        return (
          <div
            key={id}
            className={`nav_item ${activeSection === id ? "active" : ""}`}
            onClick={() => handleClick(id)}
          >
            {id}
          </div>
        );
      })}
    </div>
  );
};

export default SectionNavigator;
