import React from "react";
import { Card } from "antd";
import "../css/style.css";
import { Block } from "@mui/icons-material";

function TopSpecialist() {
  return (
    <div>
      <div className="container-lg my-3">
        <Card
          type="inner"
          title="Top Searched Specialists"
          //   extra={<a href="/">More</a>}
        >
          <section className="bg-white mt-2 pb-3 mb-2">
            <div className="col-12 text-center">
              <p className="font-size-sm">100+ Specialities Available</p>
            </div>
            <div>
              
            </div>
            <Card
              style={{
                width: 100,
              }}
            >
              <p>Card content</p>
            </Card>
            <Card
              style={{
                width: 100,
              }}
            >
              <p>Card content</p>
            </Card>
            <Card
              style={{
                width: 100,
              }}
            >
              <p>Card content</p>
            </Card>
            <Card
              style={{
                width: 100,
              }}
            >
              <p>Card content</p>
            </Card>
            <Card
              style={{
                width: 100,
              }}
            >
              <p>Card content</p>
            </Card>

            <div className="col-md-12 text-center show-link">
              <a
                href="https://www.marham.pk/all-diseases"
                className="btn btn-primary btn-sm semi-round"
              >
                View All Specialists
              </a>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}

export default TopSpecialist;
