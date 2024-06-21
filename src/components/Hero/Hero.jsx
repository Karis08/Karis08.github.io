import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 import
import BannerImg from "../../assets/hero.jpg";
import { motion } from "framer-motion";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  const navigate = useNavigate(); // navigate 함수 초기화

  const handleClick = () => {
    navigate("/test"); // '/test' 경로로 이동
  };

  return (
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 "
    >
      <div className="bg-white/70 dark:bg-black/80 duration-300 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p data-aos="fade-up" className="text-primary text-2xl">
              Multiple Games in One Place..
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-10xl font-bold"
            >
              여러분의 게임 경험이 곧 시작됩니다!
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              “또 다른 즐거움을 찾아보세요”{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"}
              className="primary-btn"
              onClick={handleClick} // 버튼 클릭 시 handleClick 함수 실행
            >
              지금 가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
