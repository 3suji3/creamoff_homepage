import "./App.css";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import Service from "./components/service/Service";
import Connect from "./components/connect/Connect";
import Footer from "./components/Footer";
import Partner from "./components/partner/Partner";
import Header from "./components/Header";
import SectionNavigator from "./components/SectionNavigator";

function App() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
