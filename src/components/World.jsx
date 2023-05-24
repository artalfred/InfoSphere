import React, { useEffect } from "react";

import world from "../img/cover/world.png";

import "../style/style.css";
import "../style/world.css";
import Cards from "./resusable/Cards";
import Articles from "./resusable/Articles";
import Jumbutron from "./resusable/Jumbutron";
import TitlePage from "./resusable/TitlePage";

export default function World({ World }) {
  return (
    <div>
      <div className="position-relative">
        <div
          className="w-100 overflow-hidden cover_img"
          style={{ height: "20rem" }}
        >
          <img src={world} alt="World-cover" style={{ height: "auto" }} />
        </div>
      </div>

      <div className="container-xxl">
        <TitlePage
          title="World News"
          country_1="U.S"
          country_2="ASIA"
          country_3="EUROPE"
          country_4="CANADA"
        />
        <div className="row mt-3 gx-5 border-bottom">
          {/* FIRST SIDE */}
          <div className="col-12 col-md-3 order-2 order-sm-2 order-md-1 order-lg-1">
            {World.slice(3, 8).map((item, index) => (
              <Articles
                key={index}
                url={item.url}
                title={item.title}
                abstract={item.abstract}
                byline={item.byline}
              />
            ))}
            {World.slice(8, 9).map((item, index) => (
              <div key={index}>
                <a href={item.url}>
                  <div className="card">
                    <div className="card-body mb-3">
                      <h6 className="fw-semibold body-text">{item.title}</h6>
                      <p className="text-secondary body-text lh-base p-0">
                        {item.abstract}
                      </p>
                      <p
                        className="text-muted mt-2"
                        style={{ fontSize: "12px" }}
                      >
                        {item.byline}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* SECOND COLUMN */}
          <div className="col-12 col-md-9 order-1 order-sm-1 order-md-2 order-lg-2">
            {World.slice(9, 10).map((item, index) => (
              <div key={index}>
                <a href={item.url}>
                  <div className="card">
                    <div className="img_card overflow-hidden">
                      <img
                        src={item.multimedia?.[0]?.url || "Hello"}
                        className="img-fluid "
                        alt="..."
                      />
                    </div>
                    <div className="card-body mt-3">
                      <h2 className="fw-bold body-text">{item.title}</h2>
                      <p className="text-secondary body-text lh-base p-0">
                        {item.abstract}
                      </p>
                      <p
                        className="text-muted mt-2"
                        style={{ fontSize: "12px" }}
                      >
                        {item.byline}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            <div className="row gy-4 mt-5">
              {World.slice(16, 19).map((item, index) => {
                return (
                  <div className="col-12 col-md-4" key={index}>
                    <Cards
                      url={item.url}
                      img={item.multimedia?.[0]?.url || "Hello"}
                      title={item.title}
                      abstract={item.abstract}
                      byline={item.byline}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row gx-3">
          {World.slice(28, 30).map((item, index) => {
            return (
              <Jumbutron
                key={index}
                url={item.url}
                img={item.multimedia?.[0]?.url || "Hello"}
                title={item.title}
                abstract={item.abstract}
                byline={item.byline}
              />
            );
          })}
        </div>

        <div className="row g-4 mt-4 border-bottom pb-5">
          <h2 className="fw-bold body-text">News of the day</h2>
          {World.slice(20, 28).map((item, index) => {
            return (
              <div className="col-12 col-md-3" key={index}>
                <Cards
                  url={item.url}
                  img={item.multimedia?.[0]?.url || "Hello"}
                  title={item.title}
                  abstract={item.abstract}
                  byline={item.byline}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
