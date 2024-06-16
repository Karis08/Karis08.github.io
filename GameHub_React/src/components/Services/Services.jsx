import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "신규 가입자를 위한 Game Pass",
    price: 1000,
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "수백 가지 고품질 PC 게임",
      "출시 당일부터 즐길 수 있는 신작 게임",
      "멤버 특가 상품 및 할인",
    ],
    duration: "14일 후 ₩7,900/월",
    aosDelay: "0",
  },
  {
    name: "GH Game Pass Standard",
    price: 7900,
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "수백 가지 고품질 PC 게임",
      "출시 당일부터 즐길 수 있는 신작 게임",
      "멤버 특가 상품 및 할인",
    ],
    duration: "₩7,900/월",
    aosDelay: "500",
  },
  {
    name: "GH Game Pass Supreme",
    price: 13500,
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "수백 가지 고품질 콘솔, PC, 클라우드 게임",
      "출시 당일부터 즐길 수 있는 신작 게임",
      "멤버 특가 상품 및 할인",
      "온라인 콘솔 멀티 플레이"
    ],
    duration: "₩13,500/월",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-bold text-center sm:text-4xl"
            >
              요금제 가입<br/>
              Game <span className="text-primary">Heaven</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                {/* <div className="grid place-items-center">{skill.icon}</div> */}
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                {skill.price} \
                </h1>

                {skill.description.map((desc) => (
                  <p>{desc}</p>
                ))}
                <p className="font-semibold text-2xl">
                  {" "}
                  최종 가격 : {skill.duration}
                </p>
                <a
                  href={skill.link}
                  className="primary-btn mt-4 group-hover:scale-105  duration-200"
                >
                  GameHeaven 가입하기
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
