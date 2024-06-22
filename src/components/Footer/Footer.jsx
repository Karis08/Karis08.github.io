import React from "react";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 가져옵니다

// 네비게이션 링크 데이터
export const Navlinks = [
  {
    id: 1,
    name: "Game Heaven?",
    link: "#", // 앵커 태그 또는 실제 경로를 사용할 수 있습니다
  },
  {
    id: 2,
    name: "가입",
    link: "#", // 이 링크는 별도로 처리할 것입니다
  },
  {
    id: 3,
    name: "게임 뉴스",
    link: "https://www.gamemeca.com/news.php", // 외부 링크
  },
];

const Footer = () => {
  const navigate = useNavigate(); // navigate 함수를 초기화합니다

  // '구독' 버튼 클릭 시 호출되는 함수
  const gotoservice_copy = () => {
    navigate("/Test"); // '/Test' 경로로 이동합니다
  };

  // '신규 및 특집' 버튼 클릭 시 호출되는 함수
  const gotoTest2 = () => {
    navigate("/Test2"); // '/Test2' 경로로 이동합니다
  };

  return (
    <div
      className="py-10 w-full bg-gray-100 dark:bg-dark dark:text-white duration-300"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          {/* 로고와 소셜 아이콘 */}
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} alt="Logo" className="w-16" />
            <div>
              {/* 소셜 핸들 */}
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.facebook.com/?locale=ko_KR">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://x.com/">
                  <FaTwitter className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
          {/* 고객 상담 정보 */}
          <div className="sm:block hidden">고객 상담 : +82 000000000</div>
          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold hover:text-primary py-1 hover:border-primary transition-colors duration-300"
                    onClick={(e) => {
                      if (id === 1) {
                        e.preventDefault(); // 기본 앵커 태그 동작을 막습니다
                        gotoTest2(); // '/Test2' 경로로 이동합니다
                      } else if (id === 2) {
                        e.preventDefault(); // 기본 앵커 태그 동작을 막습니다
                        gotoservice_copy(); // '/Test' 경로로 이동합니다
                      }
                    
                      
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
