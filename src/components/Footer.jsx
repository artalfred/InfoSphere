import React from "react";

import "../style/footer.css";

export default function Footer() {
  return (
    <div className="container-xxl">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="body-text fw-bold">News</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Home Page
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  World
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Coronavirus
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  U.S News
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  U.S Politics
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="body-text fw-bold">Opinion</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Today's Opinion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Columnists
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Editorials
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Guest Essays
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Opinion Video
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="body-text fw-bold">More</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Reader Center
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  The Athletic
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  Wire Cutter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  The Learning Network
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-body-secondary fs-xs body-text"
                >
                  ACLicensing
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h6 className="fw-bold body-text">SUBSCRIBE</h6>
              <p className="body-text">
                Monthly digest of what's new and exciting from us.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control rounded-1 body-text"
                  placeholder="Email address"
                />
                <button
                  className="btn btn-dark bg-dark rounded-1 fw-light"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="body-text">
            AccuDaily, Inc. All rights reserved. <br />
            <span className="text-muted body-text" style={{ fontSize: "13px" }}>
              created by Art Alfred Bernales
            </span>
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
