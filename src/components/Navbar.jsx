import React, { useEffect, useState } from "react";
import "../style/navbar.css";
import "../style/style.css";
import logo from "../img/icon/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const threshold = document.documentElement.scrollHeight * 0.08;

      if (window.scrollY > threshold) {
        const navbarShow = document.querySelector(".navbar_show");
        navbarShow.style.display = "block";
        navbarShow.style.marginTop = "0rem";
      } else {
        const navbarShow = document.querySelector(".navbar_show");
        navbarShow.style.display = "none";
        navbarShow.style.marginTop = "-3rem";
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="w-100" id="header">
      <header>
        <div
          className="bg-dark d-flex align-items-center ads"
          style={{ height: "2rem" }}
        >
          <div className="container-xxl d-flex align-items-center justify-content-center">
            <p className="text-light fs-xxs p-0">
              Magazine and news paper around the world
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <div
          className="offcanvas offcanvas-start sideBar"
          tabIndex="-1"
          id="sideBar"
          aria-labelledby="sideBarLabel"
        >
          <div className="offcanvas-body ps-4 pe-4 py-4">
            <ul className="d-grid gap-3 ps-2">
              <li>
                <Link to="/" className="fs-xs fw-bold">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/world" className="fs-xs fw-bold">
                  World
                </Link>
              </li>
              <li>
                <Link to="/politics" className="fs-xs fw-bold">
                  Politics
                </Link>
              </li>
              <li>
                <Link to="/sports" className="fs-xs fw-bold">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/science" className="fs-xs fw-bold">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/fashion" className="fs-xs fw-bold">
                  Fashion
                </Link>
              </li>
              <hr />
              <li>
                <Link to="" className="fs-xs fw-bold">
                  Arts
                </Link>
              </li>
              <li>
                <Link to="" className="fs-xs fw-bold">
                  Book Review
                </Link>
              </li>
              <li>
                <Link to="" className="fs-xs fw-bold">
                  Food
                </Link>
              </li>
              <li>
                <Link to="" className="fs-xs fw-bold">
                  Travel
                </Link>
              </li>
              <li>
                <Link to="" className="fs-xs fw-bold">
                  Magazine
                </Link>
              </li>
              <li>
                <Link to="" className="fs-xs fw-bold">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <nav
          className="d-flex justify-content-between align-items-center container-xxl position-relative border-bottom"
          style={{ height: "6rem" }}
          id="navbar"
        >
          <div className="d-flex align-items-center gap-5">
            <div>
              <button
                className="icon-btn d-flex justify-content-center align-items-center"
                data-bs-toggle="offcanvas"
                href="#sideBar"
                role="button"
                aria-controls="sideBar"
              >
                <span className="icons d-flex align-items-center">
                  <ion-icon name="menu-outline"></ion-icon>
                </span>
              </button>
            </div>
          </div>

          <div className="position-absolute top-50 start-50 translate-middle">
            <Link
              to="/home"
              className={`fs-2 fw-bold logo text-dark ${
                activeItem === "home" ? "fw-semibold" : ""
              }`}
              id="home"
              onClick={() => handleClick("home")}
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="d-flex gap-3 align-items-center log_account">
            <a href="#" className="fs-xs">
              Login
            </a>
            <a href="#" className="fs-xs">
              Sign up
            </a>
          </div>
        </nav>

        <div className="border-bottom border-top py-2 nav_links">
          <div className="container-xxl">
            <div className=" d-flex justify-content-start align-items-center gap-5 scroll py-2">
              <Link to="/world">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "world" ? "fw-semibold" : ""
                  }`}
                  id="world"
                  onClick={() => handleClick("world")}
                >
                  World
                </p>
              </Link>
              <Link to="/politics">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "politics" ? "fw-semibold" : ""
                  }`}
                  id="politics"
                  onClick={() => handleClick("politics")}
                >
                  Politics
                </p>
              </Link>
              <Link to="/business">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "business" ? "fw-semibold" : ""
                  }`}
                  id="business"
                  onClick={() => handleClick("business")}
                >
                  Business
                </p>
              </Link>
              <Link to="/sports">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "sports" ? "fw-semibold" : ""
                  }`}
                  id="sports"
                  onClick={() => handleClick("sports")}
                >
                  Sports
                </p>
              </Link>
              <Link to="/science">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "science" ? "fw-semibold" : ""
                  }`}
                  id="science"
                  onClick={() => handleClick("science")}
                >
                  Science
                </p>
              </Link>
              <Link to="/fashion">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "fashion" ? "fw-semibold" : ""
                  }`}
                  id="fashion"
                  onClick={() => handleClick("fashion")}
                >
                  Fashion
                </p>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* NAVBAR SHOW */}
      <header className="navbar_show fixed-top">
        <div className="border-bottom border-top py-2">
          <div className="container-xxl align-items-center justify-content-between d-flex gap-3">
            <div className="d-flex align-items-center gap-5">
              <div>
                <button
                  className="icon-btn d-flex justify-content-center align-items-center"
                  data-bs-toggle="offcanvas"
                  href="#sideBar"
                  role="button"
                  aria-controls="sideBar"
                >
                  <span className="icons d-flex align-items-center">
                    <ion-icon name="menu-outline"></ion-icon>
                  </span>
                </button>
              </div>
            </div>

            <div className="position-absolute top-50 start-50 translate-middle d-none navbar_show_logo">
              <Link to="/home">
                <div className="fs-2 fw-bold logo text-dark">
                  <img src={logo} alt="logo" />
                </div>
              </Link>
            </div>

            <div className=" d-flex justify-content-start align-items-center gap-5 scroll py-2 nav_links">
              <Link to="/world">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "world" ? "fw-semibold" : ""
                  }`}
                  id="world"
                  onClick={() => handleClick("world")}
                >
                  World
                </p>
              </Link>
              <Link to="/politics">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "politics" ? "fw-semibold" : ""
                  }`}
                  id="politics"
                  onClick={() => handleClick("politics")}
                >
                  Politics
                </p>
              </Link>
              <Link to="/business">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "business" ? "fw-semibold" : ""
                  }`}
                  id="business"
                  onClick={() => handleClick("business")}
                >
                  Business
                </p>
              </Link>
              <Link to="/sports">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "sports" ? "fw-semibold" : ""
                  }`}
                  id="sports"
                  onClick={() => handleClick("sports")}
                >
                  Sports
                </p>
              </Link>
              <Link to="/science">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "science" ? "fw-semibold" : ""
                  }`}
                  id="science"
                  onClick={() => handleClick("science")}
                >
                  Science
                </p>
              </Link>
              <Link to="/fashion">
                <p
                  className={`f-xs pb-0 ${
                    activeItem === "fashion" ? "fw-semibold" : ""
                  }`}
                  id="fashion"
                  onClick={() => handleClick("fashion")}
                >
                  Fashion
                </p>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </header>
    </div>
  );
}
