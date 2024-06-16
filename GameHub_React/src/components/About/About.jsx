import React from "react";
import BannerImg from "../../assets/banner.png";

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary">최고 인기 제품 </p>
                  <h1 className="text-2xl sm:text-4xl font-bold">Elden Ring</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              영원의 여왕 마리카를 받드는 틈새의 땅에서 황금 나무의 근원인 엘든 링이 부서졌다.<br/>

마리카의 피를 이은 아이, 「데미갓」들은 엘든 링의 파편인 거대한 룬을 손에 넣었고<br/>
그 힘에 미쳐 뒤틀리고, 끝내 파쇄전쟁을 일으켜…….<br/>

위대한 뜻으로부터 버림받았다.<br/>

그리고 과거 눈동자에서 황금의 축복을 잃고 틈새의 땅에서 쫓겨난 빛바랜 자들에게 축복의 인도가 내린다.<br/>

축복을 잃고 미처 죽지 못한 죽은 자들이여.<br/>
인도를 따라 안개의 바다를 넘어 틈새의 땅으로 향해<br/>
엘든 링을 알현하라.<br/>

그리고 엘데의 왕이 되어라.<br/>
              </p>

              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
