
//라우트 작업하기//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Test2 from "./components/Test/Test2";
import Test from "./components/Test/Test";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <Router basename="/karis_react_upload">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Test2" element={<Test2/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="Contact" element={<Contact/>}/>
        {/* 추가 라우트를 여기에 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
