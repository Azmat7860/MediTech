import React from "react";
import "../css/style.css";

function UnderHome() {
  return (
    <div>
      <section className="usps">
        <div className="container">
          <div className="swiper-container swiper-container-horizontal usps-slider overflow-visible py-0 swiper-container-initialized">
            <div
              className="swiper-wrapper justify-content-lg-center"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                className="swiper-slide small swiper-slide-active"
                style={{ width: "273px", marginRight: "40px" }}
              >
                <div className="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                 <i className="bi bi-geo-alt"></i>
                  <div className="mt-auto mt-md-0">
                    &nbsp;Search from 100+ locations
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide small swiper-slide-next"
                style={{ width: "273px", marginRight: "40px" }}
              >
                <div className="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                  <i className="bi bi-journal-arrow-up"></i>
                  <div className="mt-auto mt-md-0">
                    &nbsp;Free and without obligation
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide small"
                style={{ width: "273px", marginRight: "40px" }}
              >
                <div className="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                  <i className="bi bi-file-medical"></i>
                  <div className="mt-auto mt-md-0">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        &nbsp;Offer within 1 week{" "}
                      </font>
                    </font>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide small"
                style={{ width: "273px", marginRight: "40px" }}
              >
                <div className="text-sm text-center text-md-left d-flex flex-column flex-md-row justify-content-lg-center align-items-center">
                  <i className="bi bi-coin"></i>
                  <div className="mt-auto mt-md-0">
                    <font style={{ verticalAlign: "inherit" }}>
                      <font style={{ verticalAlign: "inherit" }}>
                        &nbsp;Not an expensive middleman
                      </font>
                    </font>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UnderHome;
