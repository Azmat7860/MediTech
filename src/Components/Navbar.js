import React from "react";
import '../style.css'
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

function Navbar() {
  const items = [
    {
      key: "1",
      type: "group",
      label: "Find Doctor By Specialist",
      children: [
        {
          key: "1",
          label: "Psychiatrist",
        },
        {
          key: "2",
          label: "Neurologist",
        },
        {
          key: "3",
          label: "Child Specialist",
        },
        {
          key: "4",
          label: "Dermatologist",
        },
        {
          key: "5",
          label: "General Physician",
        },
        {
          key: "6",
          label: "Gastroenterologist",
        },
      ],
    },
    {
      key: "2",
      label: "Find Doctor By Disease",
      children: [
        {
          key: "2-1",
          label: "Typhoid Fever",
        },
        {
          key: "2-2",
          label: "High Blood Pressure",
        },
        {
          key: "2-3",
          label: "Coronavirus",
        },
        {
          key: "2-4",
          label: "Diabetes",
        },
        {
          key: "2-5",
          label: "Bawaseer",
        },
      ],
    },
    {
      key: "3",
      label: "Find Doctor via City",
      children: [
        {
          key: "3-1",
          label: "Islamabad",
        },
        {
          key: "3-2",
          label: "Lahore",
        },
        {
          key: "3-3",
          label: "Karachi",
        },
        {
          key: "3-4",
          label: "Quetta",
        },
        {
          key: "3-5",
          label: "Peshawar",
        },
        {
          key: "3-6",
          label: "Doctor in All Cities - Pakistan",
        },
      ],
    },
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a href="/" onClick={(e) => e.preventDefault()}>
                    <Space className="space">
                      Doctors
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
              <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a href="/" onClick={(e) => e.preventDefault()}>
                    <Space className="space">
                      Caretakers
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
              <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a href="/" onClick={(e) => e.preventDefault()}>
                    <Space className="space">
                      Lab Tests <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <a className="navbar-brand nav-item" href="/">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <li className="nav-item"><a href="/" className="blogs">Health Blogs </a></li>
              <li className="d-none d-xl-block phone-btn nav-item"><a class="btn btn-outline-success btn-block" href="/login">Login/Signup</a></li>
              <li className="d-none d-xl-block phone-btn nav-item"><a class="btn btn-light btn-block text-black" href="tel:+4520663691">20 66 36 91</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default Navbar;
