import React from "react";
import BannerImg from "../../assets/game3_1.jpg";

const Banner2 = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">02</h1>
                </div>
                <div>
                  <p className="text-primary">PUBG X NEW JEANS</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">PUBG: BATTLEGROUNDS</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              LAND, LOOT, SURVIVE!
              PUBG: BATTLEGROUNDS를 무료로 플레이 하세요.<br/> 다양한 전장에서 전략적 위치를 선점하고 무기와 장비를 확보해 최후의 1인이 되기 위한 생존의 사투를 펼칩니다. 친구들과 함께 팀을 만들어 배틀로얄 건플레이 장르의 선구자인 PUBG: BATTLEGROUNDS만이 선사하는 긴장감 넘치는 경험을 위해 도전하세요.
              </p>

              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
