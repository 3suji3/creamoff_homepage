import "../styles/Intro.css";
import Compuny from "../../assets/img/Intro_1.png";
import Day from "../../assets/img/Intro_2.png";
import Location from "../../assets/img/Intro_3.png";
import Certification from "../../assets/img/Intro_4.png";
import Human from "../../assets/img/Intro_5.png";
import Solution from "../../assets/img/Intro_6.png";
import Professionalism from "../../assets/img/Intro_7.png";
import Growth from "../../assets/img/Intro_8.png";

const Intro = () => {
  return (
    <div className="Intro_container">
      <div className="article">
        <div className="article_box1">
          <div className="title">
            <p>회사 소개</p>
          </div>
          <p>
            크림오프는 반려동물과 보호자의 더 나은 삶을 위해 혁신적인 헬스케어
            기술을 개발하는 테크 스타트업입니다. <br />
            AI와 웨어러블 기술을 통해 반려동물 건강 관리의 새로운 패러다임을
            제시합니다.
          </p>
        </div>
        <div className="article_box2">
          <div className="main_box">
            <div className="content_box">
              <div className="bg_box">
                <div className="bg_img">
                  <img src={Compuny} alt="회사명" />
                </div>
                <div className="bg_text">
                  <span>회사명</span>
                  <p>크림오프 (Cream Off)</p>
                </div>
              </div>
              <div className="bg_box">
                <div className="bg_img">
                  <img src={Day} alt="설립연도" />
                </div>
                <div className="bg_text">
                  <span>설립연도</span>
                  <p>2021년</p>
                </div>
              </div>
            </div>
            <div className="content_box">
              <div className="bg_box">
                <div className="bg_img">
                  <img src={Location} alt="본사 위치" />
                </div>
                <div className="bg_text">
                  <span>본사 위치</span>
                  <p>경상북도 경산</p>
                </div>
              </div>
              <div className="bg_box">
                <div className="bg_img">
                  <img src={Certification} alt="인증현황" />
                </div>
                <div className="bg_text">
                  <span>인증현황</span>
                  <p>text</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className="bg_box2">
              <p>비전 (Vision)</p>
              <p>
                글로벌 반려동물 헬스케어 시장을 선도하는 기업으로 성장하여, 전
                세계 반려동물의 건강한 삶에 기여하는 것을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="article_box3">
          <p>핵심 가치</p>
          <div className="main_box2">
            <div className="bg_box3">
              <div>
                <img src={Human} alt="고객 중심" />
              </div>
              <p>고객 중심</p>
              <p>반려동물과 보호자의 니즈를 최우선으로 생각하는 서비스 제공</p>
            </div>
            <div className="bg_box3">
              <div>
                <img src={Solution} alt="솔루션" />
              </div>
              <p>혁신적 솔루션</p>
              <p>반려동물 헬스케어의 새로운 패러다임을 제시</p>
            </div>
            <div className="bg_box3">
              <div>
                <img src={Professionalism} alt="전문성" />
              </div>
              <p>전문성</p>
              <p>전문가와 협력한 검증된 건강 관리 시스템</p>
            </div>
            <div className="bg_box3">
              <div>
                <img src={Growth} alt="전문성" />
              </div>
              <p>지속 성장</p>
              <p>반려동물 산업의 미래를 선도하는 지속 가능한 혁신</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
