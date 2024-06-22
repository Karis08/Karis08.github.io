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

const Hero_copy = () => {
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
            Game Heaven - 최고의 게임 구독 서비스
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-20xl md:text-xl font-bold"
            >
              우리는 수백 가지 고품질 PC 및 콘솔 게임을 무제한으로 즐길 수 있는 기회를 제공합니다.
              <br/> 
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              “새로 출시된 게임을 출시 전부터 체험하고, <br/>멤버 특가 상품 및 할인 혜택을 누리세요.”
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

export default Hero_copy;
