import React from "react";
import '../css/style.css'

function BookingSteps() {
  return (
    <div>
      <section  className="steps">
        <div  className="container py-4 py-lg-5">
          <div  className="row mx-md-n5 align-items-center">
            <div  className="col-12 col-lg-6 px-md-5 mb-3 mb-lg-0 d-none d-lg-block">
              <div  className="equal equal-short">
                <video  className="video-js" autoplay loop controls>
                  <source src="/videos/bookingsteps.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div  className="col-12 col-lg-6 px-md-5 mt-3 mt-lg-0">
              <h2  className="display-7">
              Book appointments in 3 easy steps <br />
              </h2>
              <div  className="steps__wrapper">
                <div  className="steps__item">
                  <div  className="steps__icon icon-rounded border border-primary h3 text-success">
                    1
                  </div>
                  <div  className="steps__body">
                    <div  className="steps__title h3 mb-1">
                      Search
                    </div>
                    <div  className="steps__description text-dark mt-2 mt-md-0">
                    Search for doctors by specialty, hospital, service or disease
                      <br  className="d-inline-block d-md-none" />
                      <a href="/home" className="text-success"> &nbsp;Search here → </a>
                    </div>
                  </div>
                </div>
                <div  className="steps__item">
                  <div  className="steps__icon icon-rounded border border-primary h3 text-success">
                    2
                  </div>
                  <div  className="steps__body">
                    <div  className="steps__title h3 mb-1">
                      Select
                    </div>
                    <div  className="steps__description text-dark mt-2 mt-md-0">
                    Select based on Experience, Fee or Rating
                    </div>
                  </div>
                </div>
                <div  className="steps__item">
                  <div  className="steps__icon icon-rounded border border-primary h3 text-success">
                    3
                  </div>
                  <div  className="steps__body">
                    <div  className="steps__title h3 mb-1">
                      Book
                    </div>
                    <div  className="steps__description text-dark mt-2 mt-md-0">
                    Book a Confirmed Appointment within Seconds
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="{{ route('user.three-offers /"
                 className="btn btn-success mt-5 shadow"
              >
                Find a Doctor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingSteps;
