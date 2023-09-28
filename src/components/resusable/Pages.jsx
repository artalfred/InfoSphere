import { Link } from "react-router-dom";
import Cards from "./Cards";
import { useEffect } from "react";
import OtherNews from "./OtherNews";
import { useCategory } from "../Functionality/CategoryContext";
import { useApi } from "../Functionality/ApiContext";

import err from "../../img/err.png";
import Content from "./Content";

function Pages({ API }) {
  const { category, setCategory } = useCategory();

  const { home, world, politics, business, sports, arts, magazine } = useApi();

  useEffect(() => {
    if (API === home) setCategory("Latest");
    if (API === world) setCategory("World");
    if (API === politics) setCategory("Politics");
    if (API === business) setCategory("Business");
    if (API === sports) setCategory("Sports");
    if (API === arts) setCategory("Arts");
    if (API === magazine) setCategory("Magazine");
  });

  return (
    <div className="container-xxl p-2">
      {/* SECTION 1 */}
      <div className="row gx-5 mt-4" style={{ height: "auto" }}>
        <div className="col-xs-12 col-md-12 col-lg-9 d-flex gap-4 order-1 order-md-1 order-lg-1">
          <div>
            <div className="border-bottom d-flex gap-4 pb-3">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-4 order-2 order-sm-2 order-md-2 order-lg-1">
                  {API?.slice(0, 2).map((item, index) => (
                    <div key={index}>
                      {!item.title ? (
                        <div className="card pb-4">
                          <img src={err} className="img-fluid " alt="..." />
                        </div>
                      ) : (
                        <Link
                          reloadDocument
                          to={`/${category}/${item.id}/${
                            item.multimedia[0]?.caption?.replace(/\s+/g, "-") ||
                            item.title?.replace(/\s+/g, "-")
                          }`}
                        >
                          <Content
                            img={item.multimedia?.[0]?.url}
                            title={item.title}
                            abstract={item.abstract}
                            byline={item.byline}
                          />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* LARGE IMAGE */}
                <div className="col-12 col-md-8 col-lg-8 order-1 order-sm-1 order-md-1 order-lg-2">
                  {API?.slice(3, 4).map((item, index) => (
                    <div key={index}>
                      {!item.title ? (
                        <div className="card pb-4">
                          <img src={err} className="img-fluid " alt="..." />
                        </div>
                      ) : (
                        <Link
                          reloadDocument
                          to={`/${category}/${item.id}/${
                            item.multimedia[0]?.caption?.replace(/\s+/g, "-") ||
                            item.title?.replace(/\s+/g, "-")
                          }`}
                        >
                          <div className="card">
                            <img
                              src={item.multimedia?.[0]?.url}
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
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="border-bottom d-grid gap-4 py-3">
              <div className="row border-bottom">
                {/* LARGE IMAGE */}
                <div className="col">
                  {API?.slice(8, 9).map((item, index) => (
                    <div key={index}>
                      {!item.title ? (
                        <div className="card pb-4">
                          <img src={err} className="img-fluid" alt="..." />
                        </div>
                      ) : (
                        <Link
                          reloadDocument
                          to={`/${category}/${item.id}/${
                            item.multimedia[0]?.caption?.replace(/\s+/g, "-") ||
                            item.title?.replace(/\s+/g, "-")
                          }`}
                        >
                          <div className="card">
                            <div
                              className="news_img_adjust overflow-hidden"
                              style={{ maxHeight: "35rem" }}
                            >
                              <img
                                src={item.multimedia?.[0]?.url}
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
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="row gy-4">
                {API?.slice(9, 15).map((item, index) => {
                  return (
                    <div className="col-12 col-md-4" key={index}>
                      {!item.title ? (
                        <div className="card pb-4">
                          <img src={err} className="img-fluid " alt="ERROR" />
                        </div>
                      ) : (
                        <Link
                          reloadDocument
                          to={`/${category}/${item.id}/${
                            item.multimedia[0]?.caption?.replace(/\s+/g, "-") ||
                            item.title?.replace(/\s+/g, "-")
                          }`}
                        >
                          <Cards
                            category={category}
                            id={item.id}
                            item={item.multimedia?.[0].caption?.replace(
                              /\s+/g,
                              "-"
                            )}
                            img={item.multimedia?.[0]?.url}
                            title={item.title}
                            abstract={item.abstract}
                            byline={item.byline}
                          />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* SIDE NEWS */}
        <div className="col-xs-12 col-md-12 col-lg-3 border-start border-bottom order-2 order-md-2 order-lg-2">
          {API?.slice(15, 16).map((item, index) => (
            <div key={index}>
              {!item.title ? (
                <div className="card pb-4">
                  <img src={err} className="img-fluid " alt={item.title} />
                </div>
              ) : (
                <Link
                  reloadDocument
                  to={`/${category}/${item.id}/${
                    item.multimedia[0]?.caption?.replace(/\s+/g, "-") ||
                    item.title?.replace(/\s+/g, "-")
                  }`}
                >
                  <Content
                    img={item.multimedia?.[0]?.url}
                    title={item.title}
                    abstract={item.abstract}
                    byline={item.byline}
                  />
                </Link>
              )}
            </div>
          ))}
          {API?.slice(16, 21).map((item, index) => (
            <div key={index}>
              {!item.title ? (
                <div className="card pb-4">
                  <img src={err} className="img-fluid " alt="..." />
                </div>
              ) : (
                <Link
                  reloadDocument
                  to={`/${category}/${item.id}/${
                    item.multimedia[0]?.caption?.replace(/\s+/g, "-") ||
                    item.title?.replace(/\s+/g, "-")
                  }`}
                >
                  <Content
                    img={item.multimedia?.[0]?.url}
                    title={item.title}
                    abstract={item.abstract}
                    byline={item.byline}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <OtherNews API={API} category={category} />
    </div>
  );
}

export default Pages;
