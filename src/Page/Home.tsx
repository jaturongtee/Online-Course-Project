import React from "react";
import "./Home.css";
import Recommend from "../components/Recommend";

const Home = () => {
  return (
    <>
      <div className="homecontainer">
        <div className="heading">
          <h1>เรียนแบบไม่อั้น ทั้งไลฟ์และออนไลน์ ในหลักสูตรยอดฮิต</h1>
        </div>
        <div className="info">
          <p>
            กับ borntoDev ที่จะมาสอนทั้งคลาสสดออนไลน์ และ คลาสวีดีโอ
            ในหลักสูตรชั้นนำจาก borntoDev ผ่อนสบาย ๆ 0% 10 เดือน เพียง
            990.-/เดือนเท่านั้น
          </p>
        </div>
        <a href="courses">
          <div className="startbtn">
            <button>มาเริ่มเรียนกันเลย!</button>
          </div>
        </a>
        <div className="recommendclass">
          <Recommend />
        </div>
      </div>
    </>
  );
};

export default Home;
