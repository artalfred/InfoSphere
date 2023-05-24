import React from "react";
import business from "../img/cover/business.png";
import Cards from "./resusable/Cards";
import { useEffect } from "react";

export default function Business({ Business }) {
  return (
    <div className="">
      <div className="container-xxl p-2">
        <div
          className="d-flex align-items-center mt-5"
          style={{ borderBottom: "1px solid #555" }}
        >
          <h1 className="display-6 pe-4" style={{ fontWeight: "900" }}>
            Business
          </h1>
          <div className="scroll">
            <span className="border-end pe-4 f-sm fs-3 fw-light">U.S</span>
            <span className="border-end px-4 f-sm fs-3 fw-light">Tech</span>
            <span className="border-end px-4 f-sm fs-3 fw-light">Econ</span>
            <span className="border-end px-4 f-sm fs-3 fw-light">Media</span>
            <span className="border-end px-4 f-sm fs-3 fw-light">Money</span>
            <span className="border-end px-4 f-sm fs-3 fw-light">DealBook</span>
          </div>
        </div>
        {/* SECTION 1 */}
        <div className="row gx-5 mt-4" style={{ height: "auto" }}>
          <div className="col-xs-12 col-md-12 col-lg-9 d-flex gap-4 order-1 order-md-1 order-lg-1">
            <div>
              <div className="border-bottom d-flex gap-4 pb-3">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4 order-2 order-sm-2 order-md-2 order-lg-1">
                    {Business.slice(0, 2).map((item, index) => (
                      <div key={index}>
                        <a href={item.url}>
                          <div className="card ">
                            <div className="card-body border-bottom mb-3">
                              <h6 className="fw-semibold body-text">
                                {item.title}
                              </h6>
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
                    {Business.slice(2, 3).map((item, index) => (
                      <div key={index}>
                        <a href={item.url}>
                          <div className="card">
                            <div className="card-body">
                              <h6 className="fw-semibold body-text">
                                {item.title}
                              </h6>
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

                  <div className="col-12 col-md-8 col-lg-8 order-1 order-sm-1 order-md-1 order-lg-2">
                    {Business.slice(3, 4).map((item, index) => (
                      <div key={index}>
                        <a href={item.url}>
                          <div className="card">
                            <img
                              src={item.multimedia?.[0]?.url || "Hello"}
                              className="img-fluid "
                              alt="..."
                            />
                            <div className="card-body mt-3">
                              <h2 className="fw-bold body-text">
                                {item.title}
                              </h2>
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
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="border-bottom d-grid gap-4 py-3">
                <div className="row border-bottom">
                  <div className="col-12 col-md-4 col-lg-4">
                    {Business.slice(9, 11).map((item, index) => (
                      <div key={index}>
                        <a href={item.url}>
                          <div className="card ">
                            <div className="card-body border-bottom mt-3">
                              <h6 className="fw-semibold body-text">
                                {item.title}
                              </h6>
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
                    {Business.slice(11, 12).map((item, index) => (
                      <div key={index}>
                        <a href={item.url}>
                          <div className="card">
                            <div className="card-body mt-3">
                              <h6 className="fw-semibold body-text">
                                {item.title}
                              </h6>
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
                  <div className="col-md-8 col-lg-8">
                    {Business.slice(12, 13).map((item, index) => (
                      <div key={index}>
                        <a href={item.url}>
                          <div className="card">
                            <div
                              className="news_img_adjust overflow-hidden"
                              style={{ maxHeight: "26rem" }}
                            >
                              <img
                                src={item.multimedia?.[0]?.url || "Hello"}
                                className="img-fluid"
                                alt="..."
                              />
                            </div>
                            <div className="card-body mt-3">
                              <h2 className="fw-bold body-text">
                                {item.title}
                              </h2>
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
                </div>

                {/* SECTION 3 */}
                <div className="row gy-4">
                  {Business.slice(10, 16).map((item, index) => {
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
          </div>

          {/* SIDE NEWS */}
          <div className="col-xs-12 col-md-12 col-lg-3 border-start order-2 order-md-2 order-lg-2">
            {Business.slice(5, 6).map((item, index) => (
              <div key={index}>
                <a href={item.url}>
                  <div className="card ">
                    <img
                      src={item.multimedia?.[0]?.url || "Hello"}
                      className="img-fluid"
                      alt="..."
                    />
                    <div className="card-body p-0 border-bottom mt-3">
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
            {Business.slice(12, 20).map((item, index) => (
              <div key={index}>
                <a href={item.url}>
                  <div className="card ">
                    <div className="card-body p-0 border-bottom mt-3">
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
            {Business.slice(20, 21).map((item, index) => (
              <div key={index}>
                <a href={item.url}>
                  <div className="card ">
                    <div className="card-body p-0 mt-3">
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
        </div>

        <div className="row gy-4 border-bottom mt-3 pb-4">
          <h3 className="fw-bold body-text">Business</h3>
          {Business.slice(4, 12).map((item, index) => {
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
