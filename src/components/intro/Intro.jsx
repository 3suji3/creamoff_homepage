import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="Intro_container">
      <div className="article">
        <div className="article_box1">
          <div className="title">
            <p>회사 소개</p>
          </div>
          <p>
            Cream-Off는 반려동물 헬스케어 브랜드 ‘Talktail’을 통해 웨어러블
            디바이스 ‘Tailing’과 AI 기반 피부 진단 솔루션을 제공하며, <br />
            일상 속 복잡함을 덜고 본질만을 남기는 기술을 만듭니다.
          </p>
        </div>
        <div className="article_box2">
          <div className="main_box">
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_1.png" alt="회사명" />
              </div>
              <div className="bg_text">
                <span>회사명</span>
                <p>크림오프 (Cream Off)</p>
              </div>
            </div>
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_2.png" alt="설립연도" />
              </div>
              <div className="bg_text">
                <span>설립연도</span>
                <p>2021년</p>
              </div>
            </div>
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_3.png" alt="본사 위치" />
              </div>
              <div className="bg_text">
                <span>본사 위치</span>
                <p>경상북도 경산</p>
              </div>
            </div>
            <div className="bg_box">
              <div className="bg_img">
                <img src="/img/Intro_4.png" alt="인증현황" />
              </div>
              <div className="bg_text">
                <span>인증현황</span>
                <p>text</p>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="bg_box2">
              <p>비전 (Vision)</p>
              <p>
                Cream-Off는 디지털 세상의 불필요함을 덜어내고,
                <br />
                본질적인 가치만을 남기는 기술 기업입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="article_box3">
          <p>핵심 가치</p>
          <div className="main_box2">
            <div className="bg_box3">
              <div>
                <img src="/img/Intro_5.png" alt="고객 중심" />
              </div>
              <p>고객 중심</p>
              <p>사용자 중심의 간결한 경험을 설계합니다. </p>
            </div>
            <div className="bg_box3">
              <div>
                <img src="/img/Intro_6.png" alt="솔루션" />
              </div>
              <p>혁신적 솔루션</p>
              <p>기술과 디자인의 균형으로 새로운 기준을 만듭니다. </p>
            </div>
            <div className="bg_box3">
              <div>
                <img src="/img/Intro_8.png" alt="전문성" />
              </div>
              <p>지속 성장</p>
              <p>복잡함을 덜고, 효율을 높이는 솔루션을 제공합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
