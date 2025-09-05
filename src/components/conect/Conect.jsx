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
        <div className="article_box2">
          <div>
            <p>문의하기</p>
            <form action="submit_url" method="get">
              <div>
                <div>
                  <label for="name">이름 *</label>
                </div>
                <input
                  type="text"
                  id="name"
                  placeholder="이름을 입력해주세요"
                  required
                />
                <div>
                  <label for="phone">전화번호 *</label>
                </div>
                <input
                  type="phone"
                  id="phone"
                  placeholder="010-0000-0000"
                  required
                />
              </div>
              <div>
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
              <div>
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
                <input
                  type="text"
                  id="message"
                  placeholder="문의 내용을 자세히 작성해주세요"
                  required
                />
              </div>
              <button type="submit">문의하기</button>
            </form>
          </div>
        </div>
        <div className="article_box2">
          <div>
            <p>연락처 정보</p>
          </div>
          <div>
            <div>
              <div>
                <img src="" alt="전화" />
              </div>
              <div>
                <p>전화 문의</p>
                <p>1588-0123</p>
                <p>평일 09:00 - 18:00</p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="이메일" />
              </div>
              <div>
                <p>이메일</p>
                <p>creamoff2021@gmail.com</p>
                <p>24시간 접수 가능</p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="주소" />
              </div>
              <div>
                <p>회사 주소</p>
                <p>경북 경산시 3층</p>
                <p>우편 번호:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="article_box3">
          <div>
            <p>SNS</p>
            <p>
              크림오프의 다양한 소셜 채널에서 반려동물 건강 정보와 제품 소식을
              만나보세요.
            </p>
          </div>
          <div>
            <div>
              <div>
                <img src="" alt="인스타그램" />
              </div>
              <div>
                <p>Instagram</p>
                <p>@talktail_official</p>
                <p>반려동물 건강 팁과 제품 소식</p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="유튜브" />
              </div>
              <div>
                <p>YouTube</p>
                <p>Talktail Channel</p>
                <p>제품 사용법과 건강 교육 컨텐츠</p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="페이스북" />
              </div>
              <div>
                <p>Facebook</p>
                <p>Talktail Korea</p>
                <p>커뮤니티와 이벤트 정보</p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="카카오톡" />
              </div>
              <div>
                <p>카카오톡</p>
                <p>@Talktail</p>
                <p>실시간 고객 상담</p>
              </div>
            </div>
          </div>
          <div>
            <p>뉴스레터 구독</p>
            <p>
              Talktail의 최신 소식과 반려동물 건강 정보를 이메일로 받아보세요.
            </p>
            <div>
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
