
//라우트 작업하기//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";

import About from "./components/About/About";
import Test2 from "./components/Test/Test2";
import Test from "./components/Test/Test";

const App = () => {
  return (
    <Router basename="/karis_react_upload">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Test2" element={<Test2/>}/>
        {/* 추가 라우트를 여기에 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
