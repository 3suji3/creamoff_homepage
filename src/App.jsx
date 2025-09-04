import "./App.css";
import Hero from "./components/Hero/Hero";
import Intro from "./components/intro/Intro";
import Service from "./components/service/Service";
import Brand from "./components/brand/Brand";
import Result from "./components/result/Result";
import Conect from "./components/conect/Conect";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Intro />
      <Service />
      <Brand />
      <Result />
      <Conect />
      <Footer />
    </div>
  );
}

export default App;
