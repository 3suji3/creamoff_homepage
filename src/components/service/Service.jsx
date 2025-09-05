import "../styles/Service.css";

const Service = () => {
  return (
    <div className="Service_container">
      <div className="article">
        <div className="article_box1">
          <div className="title">
            <p>솔루션</p>
          </div>
          <p>
            Cream-Off는 반려동물 헬스케어 플랫폼 ‘Talktail’을 중심으로, 웨어러블
            디바이스 ‘Tailing’과 AI 피부 진단 솔루션을 통해, 건강 케어의 새로운
            기준을 만듭니다.
          </p>
        </div>
        <div className="article_box2">
          <div className="main_box">
            <div className="content_box">
              <div className="img_box">
                <img src="" alt="웨어러블 디바이스" />
                <div>
                  <p>반려동물 웨어러블 디바이스</p>
                </div>
              </div>
              <div className="content_box2">
                <div className="title_box">
                  <img src="" alt="TalkTail" />
                  <span>Tailing</span>
                </div>
                <p>
                  Tailing은 반려동물의 생체 데이터를 실시간으로 측정하는
                  Talktail 전용 웨어러블 디바이스입니다. 동물병원을 위한 B2B
                  중심 공급 구조로, 진단의 정확도와 보호자의 신뢰를 모두 높이는
                  의료 보조 기기입니다.
                </p>
                <div className="icon_container">
                  <div className="icon_content">
                    <div className="icon_box">
                      <img src="" alt="심박수" />
                      <span>
                        이상 징후 감지 및 알림 (체온, 심박수, 산소포화도 등
                        실시간 모니터링)
                      </span>
                    </div>
                    <div className="icon_box">
                      <img src="" alt="알림" />
                      <span>
                        병원 전용 대시보드 연동 (진료 자동화 및 맞춤 알림 제공)
                      </span>
                    </div>
                    <div className="icon_box">
                      <img src="" alt="연동" />
                      <span>보호자용 앱 연동(예정)</span>
                    </div>
                  </div>
                  <div className="more_button">
                    <p>자세히보기 →</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content_box">
              <div className="img_box">
                <img src="" alt="AI 진단 서비스" />
                <div>
                  <p>반려동물 피부 질환 AI 진단</p>
                </div>
              </div>
              <div className="content_box2">
                <div className="title_box">
                  <img src="" alt="Talktail Skincare AI" />
                  <span>Talktail Skincare AI</span>
                </div>
                <p>
                  Talktail Skincare AI는 반려동물의 피부를 사진 한 장으로
                  진단하고, AI를 통해 질환 가능성을 예측한 뒤, 병원과 연계해주는
                  비대면 케어 솔루션입니다.
                </p>
                <div className="icon_container">
                  <div className="icon_content">
                    <div className="icon_box">
                      <img src="" alt="분석" />
                      <span>
                        이미지 기반 피부 분석(딥러닝 학습을 통한 질환 분류 및
                        예측)
                      </span>
                    </div>
                    <div className="icon_box">
                      <img src="" alt="업로드" />
                      <span>간편한 이미지 업로드(앱/웹을 통한 진단 요청)</span>
                    </div>
                    <div className="icon_box">
                      <img src="" alt="연결" />
                      <span>
                        병원 연계 시스템(가장 적합한 병원으로 바로 연결)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="more_button">
                  <p>자세히보기 →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
