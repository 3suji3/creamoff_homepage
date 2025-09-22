import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import Service from "./components/service/Service";
import Connect from "./components/connect/Connect";
import Footer from "./components/Footer";
import Partner from "./components/partner/Partner";
import Header from "./components/Header";
import MobileHero from "./mobileComponents/mobileHero";
import MobileIntro from "./mobileComponents/mobileIntro";
import MobileService from "./mobileComponents/mobileService";
import MobileConnect from "./mobileComponents/mobileConnect";
import MobileNews from "./mobileComponents/mobileNews";
import SectionNavigator from "./components/SectionNavigator";

function App() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    // 초기 width 설정
    setWidth(window.innerWidth);

    // resize 이벤트 핸들러
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header />
      {width >= 500 ? (
        <>
          <Hero />
          <SectionNavigator />
          <div id="intro">
            <Intro />
          </div>
          <div id="service">
            <Service />
          </div>
          <Partner />
          <div id="connect">
            <Connect />
          </div>
        </>
      ) : (
        <>
          <MobileHero />
          <div id="intro">
            <MobileIntro />
          </div>
          <div id="service">
            <MobileService />
          </div>
          <div id="connect">
            <MobileConnect />
          </div>
          <MobileNews />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
