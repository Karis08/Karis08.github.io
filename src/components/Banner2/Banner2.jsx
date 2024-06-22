import React, { useState } from "react";
import BannerImg from "../../assets/game3_1.jpg";

const Banner2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-14 dark:bg-dark bg-white duration-300 relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl">
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

              <button 
                data-aos="fade-up" 
                className="button-outline"
                onClick={openModal} // 버튼 클릭 시 모달 열기
              >
               트레일러 보기
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="max-w-full md:max-w-[400px] lg:max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>

      {/* 모달 구현 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-black dark:text-white"
              onClick={closeModal} // 모달 닫기
            >
              &times;
            </button>
            <div className="bg-white w-full h-96 aspect-w-16 aspect-h-9 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-center text-gray-500">영상이 여기에 표시됩니다</p> {/* 영상이 표시될 영역의 플레이스홀더 */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner2;
