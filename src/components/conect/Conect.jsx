import "../styles/Conect.css";

const Conect = () => {
  return (
    <div className="Conect_container">
      <div className="article">
        <div className="article_box1">
          <div className="title">
            <p>연락처 & SNS</p>
          </div>
          <p>궁금한 점이 있으시거나 협업을 원하신다면 언제든지 연락주세요</p>
        </div>
        <div className="article2">
          <div className="article_box2">
            <p>문의하기</p>
            <div className="form_box">
              <form action="submit_url" method="get">
                <div className="form_flex">
                  <div className="form_label">
                    <label for="name">이름 *</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="이름을 입력해주세요"
                      required
                    />
                  </div>
                  <div className="form_label">
                    <label for="phone">전화번호 *</label>
                    <input
                      type="phone"
                      id="phone"
                      placeholder="010-0000-0000"
                      required
                    />
                  </div>
                </div>
                <div className="form_label">
                  <div>
                    <label for="email">이메일 *</label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
                <div className="form_label">
                  <div>
                    <label>문의 유형</label>
                  </div>
                  <select name="inquiry" id="inquiry">
                    <option value="" selected>
                      문의 유형 선택
                    </option>
                    <option value="product">제품 문의</option>
                    <option value="partnership">협업 문의</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>
                <div>
                  <div>
                    <label for="name">메시지 *</label>
                  </div>
                  <textarea
                    type="text"
                    id="message"
                    placeholder="문의 내용을 자세히 작성해주세요"
                    rows={4}
                    required
                  />
                </div>
                <button type="submit">문의하기</button>
              </form>
            </div>
          </div>
          <div className="article_box2">
            <p>연락처 정보</p>
            <div className="info_box">
              <div className="info_content">
                <div className="info_img">
                  <img src="/img/Conect_1.svg" alt="전화" />
                </div>
                <div className="info_text">
                  <p>전화 문의</p>
                  <p>070-4571-7580</p>
                  <p>평일 09:00 - 18:00</p>
                </div>
              </div>
              <div className="info_content">
                <div className="info_img">
                  <img src="/img/Conect_2.svg" alt="이메일" />
                </div>
                <div className="info_text">
                  <p>이메일</p>
                  <p>creamoff2021@never.com</p>
                  <p>24시간 접수 가능</p>
                </div>
              </div>
              <div className="info_content">
                <div className="info_img">
                  <img src="/img/Conect_3.svg" alt="주소" />
                </div>
                <div className="info_text">
                  <p>회사 주소</p>
                  <p>경상북도 경산시 삼풍로 27 경북청년창업지원센터 309호</p>
                  <p>우편 번호: 38542</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article_box3">
          <div className="sns_text">
            <p>SNS</p>
            <p>
              크림오프의 다양한 SNS에서 반려동물 정보와 제품 소식을 만나보세요.
            </p>
          </div>
          <div className="sns_box">
            <div className="sns_content">
              <a
                href="https://www.instagram.com/talktail.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_4.svg" alt="인스타그램" />
                </div>
                <p className="sns_content_text">Instagram</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://blog.naver.com/creamoff2021"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_7.svg" alt="네이버" />
                </div>
                <p className="sns_content_text">Naver</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://www.linkedin.com/company/105303874/admin/dashboard/
"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_5.svg" alt="링크드인" />
                </div>
                <p className="sns_content_text">Linkedin</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://youtube.com/@talktail.official?si=6VLmvA4ba12TcFn4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_6.svg" alt="유튜브" />
                </div>
                <p className="sns_content_text">YouTube</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://pf.kakao.com/_CSDxln"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_8.svg" alt="카카오톡" />
                </div>
                <p className="sns_content_text">Kakao</p>
              </a>
            </div>
          </div>
          <div className="newsletter_box">
            <p>뉴스레터 구독</p>
            <p>Talktail의 최신 소식과 반려동물 정보를 이메일로 받아보세요.</p>
            <div className="newsletter_form">
              <input type="email" placeholder="이메일 주소를 입력하세요" />
              <button type="submit">구독하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conect;
