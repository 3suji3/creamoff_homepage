import './styles/Header.css'

const Header = () => {
    return (
        <div className="header_container">
            <div className='header_logo'>
                <h3>Talktail</h3>
            </div>
            <div className='header_nav'>
                <button>회사소개</button>
                <button>제품/서비스</button>
                <button>브랜드</button>
                <button>성과</button>
                <button>연락처</button>
            </div>
        </div>
    )
}

export default Header;