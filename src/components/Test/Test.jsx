// components/Test/Test.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import

const Test = () => {
  const navigate = useNavigate(); // navigate 함수 초기화

  const gotomain = () => {
    navigate("/"); // '/' 경로로 이동
  };

  const gototest2 = () => {
    navigate("/Test2"); // '/' 경로로 이동
  };

  return (
    <div>
      <h1>This is the Test component!</h1>
      <button className="primary-btn" onClick={gotomain}>
        Go Back to Main
      </button>
      <button className="primary-btn" onClick={gototest2}>
        Go Back to Test2
      </button>
    </div>
  );
};

export default Test;
