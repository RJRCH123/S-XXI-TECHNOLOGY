import React, { useState, useEffect, useRef } from "react";
import "./_Slider.css";

function Slider(props) {
  let { path, baner } = props;
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === baner.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });
  return (
    <section className="slideshow">
      <div className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {baner.map((item, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,.8) 25%,transparent 75%), url(${path}${item.img})`  }}
            // style={{ backgroundColor: `${item.color}`  }}
          >
            <div className="slide-content" >
             {/* <img className="slide" src={`${path}${item.img}`} alt={item.alt} Style="z-index: -100;" />  */}
              <h1>{item.title}</h1>
              <p>{item.description}</p>             
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {baner.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot ${index === idx ? "activeDot" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}


export default Slider;
