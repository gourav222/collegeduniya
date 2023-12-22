import React from "react";
import logo1 from "../../Images/logo1.png";
import search from "../../Images/search.png";
import "./Navbar.css";
import pen from "../../Images/pen.png";
import bell from "../../Images/bell.png";
import dot from "../../Images/dot.png";
import logo from "../../Images/logo.png";
import menu from "../../Images/menu.png";
import sc from "../../Images/sc.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <div className="logo-1">
          <img src={logo1} alt="" className="logo" />
        </div>
        <div className="bar"></div>
        <div className="city">
          <img style={{ width: "140px" }} src={sc} alt="" />
          <select className="select-item">
            <option value="Select Goal">Select Goal</option>
            <option value="A">A</option>
            <option value="B">C</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="searchBar">
          <img src={search} alt="" />
          Search for colleges, Exams, Courses and More..
        </div>
        <div className="reviews">
          <img src={pen} alt="" className="edit" />
          <div>
            <p>Write a review</p>
            <div>Get upto ₹500*</div>
          </div>
        </div>
        <div className="bar"></div>
        <div className="notification">
          <div className="explore">
            <img src={dot} alt="" />
            <p>Explore</p>
          </div>
          <img src={bell} alt="" className="bell" />
          <div className="logo-menu">
            <img className="img-1" src={menu} alt="" />
            <img className="img-2" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
