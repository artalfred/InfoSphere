import "../style/navbar.css";
import "../style/style.css";
import logo from "../img/icon/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Search from "./resusable/Search";

export default function Navbar() {
  const [isHide, setIsHide] = useState(false);

  function showNav() {
    const triggerPosition = window.innerHeight * 0.2; // Adjust this value as needed

    if (window.scrollY >= triggerPosition) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }

  // Attach the event listener to the window's scroll event
  window.addEventListener("scroll", showNav);

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

        <nav
          className="d-flex justify-content-between align-items-center container-xxl position-relative navbar-menu"
          style={{ height: "6rem" }}
          id="navbar"
        >
          <div className="align-items-center gap-5 menu">
            <div>
              <button
                className="icon-btn d-flex justify-content-center align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar"
                aria-controls="sidebar"
              >
                <span className="icons d-flex align-items-center">
                  <ion-icon name="menu-outline"></ion-icon>
                </span>
              </button>
            </div>
          </div>

          <div className="position-absolute top-50 start-50 translate-middle navbar-menu-logo">
            <Link to="/" className="fs-2 fw-bold logo text-dark">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-end search">
            <Search width="18rem" position="position-absolute end-0" />
          </div>
        </nav>

        <div
          className="border-bottom border-top py-2 nav_links"
          id="navigation"
        >
          <div className="container-xxl">
            <div className="d-flex justify-content-start align-items-center gap-5 scroll py-2">
              <NavLink to="/">
                <p className="f-xs pb-0 ">Home</p>
              </NavLink>
              <NavLink to="/world">
                <p className="f-xs pb-0 ">World</p>
              </NavLink>
              <NavLink to="/politics">
                <p className="f-xs pb-0 ">Politics</p>
              </NavLink>
              <NavLink to="/business">
                <p className="f-xs pb-0">Business</p>
              </NavLink>
              <NavLink to="/sports">
                <p className="f-xs pb-0">Sports</p>
              </NavLink>
              <NavLink to="/arts">
                <p className="f-xs pb-0">Arts</p>
              </NavLink>
              <NavLink to="/magazine">
                <p className="f-xs pb-0">Magazine</p>
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* SHOW/HIDE NAVIGATION */}
      <div
        className={`fixed-top border-bottom py-2 nav_links navigation ${
          isHide ? "d-block" : "d-none"
        }`}
      >
        <div className="container-xxl">
          <div className="d-flex justify-content-center align-items-center gap-5 scroll py-2">
            <NavLink to="/">
              <p className="f-xs pb-0 ">Home</p>
            </NavLink>
            <NavLink to="/world">
              <p className="f-xs pb-0 ">World</p>
            </NavLink>
            <NavLink to="/politics">
              <p className="f-xs pb-0 ">Politics</p>
            </NavLink>
            <NavLink to="/business">
              <p className="f-xs pb-0">Business</p>
            </NavLink>
            <NavLink to="/sports">
              <p className="f-xs pb-0">Sports</p>
            </NavLink>
            <NavLink to="/arts">
              <p className="f-xs pb-0">Arts</p>
            </NavLink>
            <NavLink to="/fashion">
              <p className="f-xs pb-0">Fashion</p>
            </NavLink>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          <div>
            <Link to="/AccuDaily" className="fs-2 fw-bold logo text-dark">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Search width="100%" />

          <div
            className="d-grid w-100 py-4"
            style={{ marginTop: "1rem", paddingLeft: ".5rem" }}
          >
            <NavLink className="border-top py-3" to="/">
              <p className="fs-5 pb-0 ">Home</p>
            </NavLink>
            <NavLink className="border-top py-3" to="/world">
              <p className="fs-5 pb-0 ">World</p>
            </NavLink>
            <NavLink className="border-top py-3" to="/politics">
              <p className="fs-5 pb-0 ">Politics</p>
            </NavLink>
            <NavLink className="border-top py-3" to="/business">
              <p className="fs-5 pb-0">Business</p>
            </NavLink>
            <NavLink className="border-top py-3" to="/sports">
              <p className="fs-5 pb-0">Sports</p>
            </NavLink>
            <NavLink className="border-top py-3" to="/arts">
              <p className="fs-5 pb-0">Arts</p>
            </NavLink>
            <NavLink
              className="border-top border-bottom py-3"
              reloadDocument
              to="/magazine"
            >
              <p className="fs-5 pb-0">Magazine</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
