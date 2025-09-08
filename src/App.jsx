import "./App.css";
import Hero from "./components/hero/Hero";
import Intro from "./components/intro/Intro";
import Service from "./components/service/Service";
import Conect from "./components/conect/Conect";
import Footer from "./components/Footer";
import Partner from "./components/partner/Partner";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Service />
      <Partner />
      <Conect />
      <Footer />
    </div>
  );
}

export default App;
