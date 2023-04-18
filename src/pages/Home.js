import React from "react";
import "../css/style.css";
import '../js/main.js'
import Typewriter from 'typewriter-effect';
import UnderHome from "./UnderHome";
import HorizontalCard from "../Components/HorizontalCard";

function Home() {
  return (
    <div>
      <section
        className="filter overflow-visible bg-tertiary with-header"
        id="start"
      >
        <div className="d-flex flex-column">
          <div className="container order-1 order-md-1 pt-4 pb-3 pb-md-5 mt-5">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1">
                <div className="text-center text-white">
                  <h2 className="display-6">
                    <span className="opacity-75">
                      Find and Book
                    </span>
                    <br />
                    <Typewriter
                        options={{
                        strings: ['The Best Doctors Near You!'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                  </h2>
                </div>
              </div>
            </div>

            <div className="filter__form bg-white shadow-lg">
              <form method="GET" action="http://127.0.0.1:8000/partnere">
                <div className="row mx-n2 d-flex align-items-center">
                  <div className="col-12 col-md col-lg-5 d-flex flex-column my-1 px-2">
                    <div className="form-group-overlay first">
                      <label for="locations">Location</label>
                      <input
                        id="location"
                        name=""
                        className="form-control m-0 border-0 bg-transparent shadow-none h-auto"
                        type="text"
                        size="50"
                        placeholder="Select Location"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md col-lg-5 d-flex flex-column my-1 px-2">
                    <div className="form-group-overlay">
                      <label for="guests">Doctor</label>
                      <input
                        id="doctor"
                        name=""
                        className="form-control m-0 border-0 bg-transparent shadow-none h-auto"
                        type="text"
                        placeholder="Find Doctors or Specialists"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-lg-2 px-2">
                    <button
                      className="btn btn-success btn-block h-100 btn-search"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-none d-md-flex justify-content-center align-items-center text-center patient-relief py-3 px-4">
        <i className="bi bi-save text-white"></i>
        <div className="text-white mx-3">Pay online for physical appointment & get 10% Patient Care Relief</div>
         <a href="/faa-3-tilbud" className="font-weight-bold text-white text-decoration-underline">Get Relief 10%</a>
        </div>
        </section>
      <UnderHome/>
      <div className="h-cards">
      <HorizontalCard/>
      </div>
<hr/>
    </div>
  );
}

export default Home;
