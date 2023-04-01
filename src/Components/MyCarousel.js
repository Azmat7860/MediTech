import React from "react";
import '../style.css'
import { Carousel } from "antd";

function MyCarousel() {
  const contentStyle = {
    margin: 10,
    height: "300px",
    width: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    display: "inline-block",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <div className="doctors-carousel">
        <h2 className="ms-3">Platinum Doctors</h2>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
            <h3 style={contentStyle}>1</h3>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
            <h3 style={contentStyle}>2</h3>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
            <h3 style={contentStyle}>3</h3>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
            <h3 style={contentStyle}>4</h3>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
