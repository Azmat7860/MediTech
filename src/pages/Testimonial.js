import React from "react";
import '../css/style.css'
import { Carousel } from "antd";

function Testimonial() {
  const contentStyle = {
    margin: 10,
  };
  return (
    <div>
      <section id="testimonials" className="section-bg mb-4">
        <div className="container" data-aos="fade-up">
          <header className="section-header text-center">
            <h5>Here's What Our Users Say About Us!</h5>
          </header>
          <Carousel 
          autoplay
          autoplaySpeed={5000}
          >
            <div style={contentStyle}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="./images/MediTech_Logo.png"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={contentStyle}>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="./images/MediTech_Logo.png"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                  </p>
                </div>
              </div>
            </div>

            <div style={contentStyle}>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="./images/MediTech_Logo.png"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                  </p>
                </div>
              </div>
            </div>

            <div style={contentStyle}>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src="./images/MediTech_Logo.png"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
