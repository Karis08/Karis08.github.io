// components/Test/Test.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Test2.css";
import Hero_copy from "../Hero/Hero_copy";



const Test2 = () => {
  const navigate = useNavigate(); // navigate 함수 초기화

  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();


  const gotomain = () => {
    navigate("/"); // '/' 경로로 이동
  };

  /*const gototest2 = () => {
    navigate("/Test2"); // '/' 경로로 이동
  };
*/

  return (
    <div className="test-container">
      <Navbar/>
      <Hero_copy/>
      <div className="button-container">
        <button className="primary-btn" onClick={gotomain}>
          <h1>메인으로 돌아가기</h1>
        </button>
      </div>
      <Footer />

    </div>
  );
};

      
      {/*<button className="primary-btn" onClick={gototest2}>
        Go Back to Test2
      </button>*/}
//     </div>
//   );
// };

export default Test2;
