import React from "react";
// import { Zoom } from "react-awesome-reveal";

function HorizontalCard() {
  const contentStyle = {
    margin: 10,
    // maxWidth: "550px",
    // backgroundColor: "#e8effb",
    minWidth: "480px",
    display: "inline-block",
  };
  return (
    <div>
      <div className="h-card">
        <div className="container">
          <div class="card mb-4 mt-4" style={contentStyle}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="./images/MediTech_Logo.png"
                  class="img-fluid rounded-start"
                  alt="..."
                  width={180}
                  height={"100%"}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Book Appointment</h5>
                  <p class="card-text">
                    Find and Book the top specialists of Pakistan
                  </p>
                  <div class="card-text">
                    <button type="button" class="btn btn-success">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4 mt-4" style={contentStyle}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="./images/MediTech_Logo.png"
                  class="img-fluid rounded-start"
                  alt="..."
                  width={180}
                  height={"100%"}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Video Consultation</h5>
                  <p class="card-text">
                    Instant Video Consultation with Top Doctors
                  </p>
                  <div class="card-text">
                    <button type="button" class="btn btn-secondary">
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
