import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="Hero_container">
      <div className="article">
        <div className="article_box1">
          <p>반려동물 케어, 더 똑똑하게</p>
          <p className="article_box1_p1">
            AI와 웨어러블로 <br />
            <span>반려동물 건강</span>을<br />
            지켜보세요
          </p>
          <p className="article_box1_p2">
            Cream-Off는 반려동물 헬스케어 플랫폼 ‘Talktail’을 중심으로, 웨어러블
            디바이스 ‘Tailing’과 AI 피부 진단 솔루션을 통해, 건강 케어의 새로운
            기준을 만듭니다.
          </p>
          <div className="button_container">
            <div className="button_box">
              <div className="box1">
                <span>제품 알아보기 →</span>
              </div>
            </div>
            <div className="button_box">
              <div className="box2">
                <img src="/img/Hero_1.svg" alt="GooglePlay" />
                <span>Google Play</span>
              </div>
              <div className="box2">
                <img src="/img/Hero_3.svg" alt="AppStore" />
                <span>App Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="article_box2">
          {/* <img src="/img/Hero_2.png" alt="dog" /> */}
          <video muted autoPlay loop>
            <source src="/Hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
