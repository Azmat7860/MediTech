import React from "react";
import "../style.css";
import Typewriter from 'typewriter-effect';
import UnderHome from "./UnderHome";

function Home() {
  return (
    <div>
      <section
        class="filter overflow-visible bg-tertiary with-header"
        id="start"
      >
        <div class="d-flex flex-column">
          <div class="container order-1 order-md-1 pt-4 pb-3 pb-md-5">
            <div class="row">
              <div class="col-12 col-md-10 offset-md-1">
                <div class="text-center text-white">
                  <h2 class="display-6">
                    <span class="opacity-75">
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

            <div class="filter__form bg-white shadow-lg">
              <form method="GET" action="http://127.0.0.1:8000/partnere">
                <div class="row mx-n2 d-flex align-items-center">
                  <div class="col-12 col-md col-lg-5 d-flex flex-column my-1 px-2">
                    <div class="form-group-overlay first">
                      <label for="locations">Location</label>
                      <input
                        id="location"
                        name=""
                        class="form-control m-0 border-0 bg-transparent shadow-none h-auto"
                        type="text"
                        size="50"
                        placeholder="Select Location"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md col-lg-5 d-flex flex-column my-1 px-2">
                    <div class="form-group-overlay">
                      <label for="guests">Doctor</label>
                      <input
                        id="doctor"
                        name=""
                        class="form-control m-0 border-0 bg-transparent shadow-none h-auto"
                        type="text"
                        placeholder="Find Doctors or Specialists"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-3 col-lg-2 px-2">
                    <button
                      class="btn btn-success btn-block h-100 btn-search"
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
        <div class="d-none d-md-flex justify-content-center align-items-center text-center bg-success py-3 px-4">
            <img src="" alt="/"/>
        <div class="text-white mx-3">Pay online for physical appointment & get 10% Patient Care Relief</div>
         <a href="/faa-3-tilbud" class="font-weight-bold text-white text-decoration-underline">Get Relief 10%</a>
        </div>
        </section>
      <UnderHome/>
<hr/>
    </div>
  );
}

export default Home;
