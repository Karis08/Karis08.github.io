import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { BiPhoneCall } from "react-icons/bi";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 가져옵니다

// 네비게이션 링크 데이터
export const Navlinks = [
  {
    id: 1,
    name: "Game Heaven?",
    link: "#", // 이 링크는 별도로 처리할 것입니다
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

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); // navigate 함수를 초기화합니다

  // 메뉴 토글 함수
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* 전화번호 섹션 */}
          <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />{" "}
            +82 000000000
          </div>
          {/* 로고 */}
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0"
            />
          </div>
          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold hover:text-primary duration-300"
                    onClick={(e) => {
                      if (id === 1) {
                        e.preventDefault(); // 기본 앵커 태그 동작을 막습니다
                        gotoTest2(); // '/Test2' 경로로 이동합니다
                      } else if (id === 2) {
                        e.preventDefault(); // 기본 앵커 태그 동작을 막습니다
                        gotoservice_copy(); // '/Test' 경로로 이동합니다
                      }
                      // 다른 링크는 기본 동작을 유지
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* 다크 모드 기능 구현 */}
              <DarkMode />
            </ul>
          </nav>
          {/* 모바일 보기 */}
          <div className="flex items-center gap-4 md:hidden py-4">
            <DarkMode />
            {/* 모바일 햄버거 아이콘 */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* 반응형 메뉴 */}
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
