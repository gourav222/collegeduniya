import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const nextSilde = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSilde();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [nextSilde]);

  return (
      <div style={{overflow:"hidden"}}>
        {slides.map((slide, index) => {
          return (
            <div
              className={index === currentIndex ? "slide-active" : "slide"}
              key={index}
            >
              {index === currentIndex && (
                <img src={slide.img} alt="slide" className="slide-img" />
              )}
            </div>
          );
        })}
      </div>
  );
};

export default ImageSlider;

// import { useCallback, useEffect, useRef, useState } from "react";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",

//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const sliderStyles = {
//   position: "relative",
//   //   position: "absolute",
//   // zIndex: "1",
//   height: "100%",
// };

// const slidesContainerStyles = {
//   display: "flex",
//   height: "100%",
//   transition: "transform ease-out 0.3s",
// };

// const slidesContainerOverflowStyles = {
//   overflow: "hidden",
//   height: "100%",
// };

// const ImageSlider = ({ slides, parentWidth }) => {
//   const timerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToNext = useCallback(() => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }, [currentIndex, slides]);
//   const getSlideStylesWithBackground = (slideIndex) => ({
//     ...slideStyles,
//     backgroundImage: `url(${slides[slideIndex].url}.png)`,
//     width: `${parentWidth}px`,
//   });
//   const getSlidesContainerStylesWithWidth = () => ({
//     ...slidesContainerStyles,
//     width: parentWidth * slides.length,
//     transform: `translateX(${-(currentIndex * parentWidth)}px)`,
//   });

//   useEffect(() => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//     }
//     console.log(slides[currentIndex])
//     timerRef.current = setTimeout(() => {
//       goToNext();
//     }, 2000);

//     return () => clearTimeout(timerRef.current);
//   }, [goToNext]);

//   return (
//     <div style={sliderStyles}>
//       <div style={slidesContainerOverflowStyles}>
//         <div style={getSlidesContainerStylesWithWidth()}>
//           {slides.map((_, slideIndex) => (
//             <div
//               key={slideIndex}
//               style={getSlideStylesWithBackground(slideIndex)}
//             >ss</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
