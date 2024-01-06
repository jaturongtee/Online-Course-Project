import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbarboxarea">
        <div className="navbarcontainer">
          <div className="logo">
            <Link to="/">
              <img src="/Image/school-full-225x72.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu">
            <div className="dropdown">
              <Link to="/courses" className="dropdownbtn">
                <p>หลักสูตรทั้งหมด</p>
              </Link>
              <div className="dropdownContent">
                <a href="category4">Data Science</a>
                <a href="category3">Web Development</a>
                <a href="category2">Machine Learning</a>
                <a href="category1">Programming Fundamentals</a>
              </div>
            </div>
            <a
              href="https://www.facebook.com/groups/2425184314214694/"
              target="_blank"
            >
              คอมมูนิตี้
            </a>
            <Link to="/contact">
              <p>ติดต่อเรา</p>
            </Link>
          </div>
          <div className="profile">
            <div className="profilepic">
              <img src="/Image/dog4.jpg" alt="Profile" />
            </div>
            <p>Jaturong Saeio</p>
          </div>
        </div>
        
      </div>
    </>
  );
};
