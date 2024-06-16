import React from "react";
import BannerImg from "../../assets/game2.jpg";

const About2 = () => {
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

                <div>
                  <p className="text-primary">DLC</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">Elden Ring Shadow of the Erdtree</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">

그림자의 땅<br/>


황금 나무의 그림자에 숨겨진 땅<br/>

신 마리카가 처음 선 곳<br/>


그리고, 알려지지 않을 싸움과 숙청의 땅<br/>

메스메르의 불에 불탄 곳<br/>


그렇기에 미켈라는 그림자의 땅으로 향했다<br/>

그 황금의 몸도, 힘도, 숙명도<br/>

모두 버렸다<br/>


미켈라는 기다린다<br/>

약속한 왕을<br/>

              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
