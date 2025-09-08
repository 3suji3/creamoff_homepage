import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="article">
        <div className="header_logo">
          <img src="/LOGO(svg).svg" alt="logo" />
        </div>
        <div className="header_nav">
          <p>회사소개</p>
          <p>솔루션</p>
          <p>연락처</p>
        </div>
        <div className="header_language">
          <select name="language" id="lang">
            <option value="" selected>
              언어변경
            </option>
            <option value="ko">한국어</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
