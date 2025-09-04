import "../styles/Hero.css";
import GooglePlay from "../../assets/img/Hero_1.png";
import Dog from "../../assets/img/Hero_2.png";

const Hero = () => {
  return (
    <div className="Hero_container">
      <div className="article">
        <div className="article_box1">
          <p className="article_box1_p1">
            AI와 웨어러블로 <br /> <span>반려동물 건강</span>을 <br />
            지켜보세요
          </p>
          <p className="article_box1_p2">
            크림오프와 함께 웨어러블 디바이스와 <br />
            AI 기술로 더 나은 반려동물 케어를 경험하세요.
          </p>
          <div className="button_box">
            <div className="box1">
              <img src={GooglePlay} alt="Google Play" />
              <span>Google Play</span>
            </div>
            <div className="box2">
              <img src="" alt="AppStore" />
              <span>App Store</span>
            </div>
          </div>
        </div>
        <div className="article_box2">
          <img src={Dog} alt="dog"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
