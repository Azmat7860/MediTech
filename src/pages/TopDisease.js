import React from "react";
import { Card } from "antd";
import "../css/style.css";

function TopDisease() {
  return (
    <div>
      <div className="container-lg my-3">
        <Card
          type="inner"
          title="Top Searched Diseases"
        //   extra={<a href="/">More</a>}
        >
          <section className="bg-white mt-2 pb-3 mb-2">
            <div className="col-12 text-center">
              <p className="font-size-sm">
                Let's Find The &nbsp;
                <span className="fw-bold">Right Doctor</span> For Your
                Disease!
              </p>
            </div>

            <div className="col-md-12 text-center show-link">
              <a
                href="https://www.marham.pk/all-diseases"
                className="btn btn-primary btn-sm semi-round"
              >
                View All Diseases
              </a>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}

export default TopDisease;
