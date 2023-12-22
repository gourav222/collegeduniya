import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import CoursesBar from "../CoursesBar/CoursesBar";
import img1 from "../../Images/backImg-1.png";
import img2 from "../../Images/backImg-2.png";
import img3 from "../../Images/backImg-3.png";
import search from "../../Images/search.png";
import ImageSlider from "../ImageSlider/ImageSlider";
import TypingCorsor from "../TypingCorsor/TypingCorsor";
const Home = () => {
  const slides = [
    { img: img1, title: "Indian Institute Of Technology And Research" },
    { img: img2, title: "Indian Institute Of Management" },
    { img: img3, title: "Shri Ram College Of Commerce" },
  ];
  // const slides = [
  //   {
  //     url: "https://source.unsplash.com/random/200x200?sig=1",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/200x200?sig=2",
  //   },
  //   {
  //     url: "https://source.unsplash.com/random/200x200?sig=3",
  //   },
  // ];
  return (
    <div className="home">
      <div className="home-item">
        <ImageSlider slides={slides} parentWidth={500}/>
        <Navbar />
        <CoursesBar />
        <div className="dark-space"></div>
        <div className="mid-container">
          <TypingCorsor />
          <div className="search">
            <div className="search-1">
              <img src={search} alt="" />
              Search for colleges, Exams, Courses and More..
            </div>

            <button className="search-botton">Search</button>
          </div>
          <div className="counselling-1">
            <button className="counselling">Need Counselling</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
