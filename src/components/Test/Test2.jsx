// components/Test/Test.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import

const Test2 = () => {
  const navigate = useNavigate(); // navigate 함수 초기화

  const gototest = () => {
    navigate("/test"); // '/' 경로로 이동
  };

  return (
    <div>
      <h1>This is the Test component!   TESt2</h1>
      <button className="primary-btn" onClick={gototest}>
        Go Back to Test
      </button>
    </div>
  );
};

export default Test2;
