import { Link } from "react-router-dom";
import Cards from "./Cards";
import { useEffect } from "react";
import OtherNews from "./OtherNews";
import { useCategory } from "../Functionality/CategoryContext";
import Error from "./Error";
import { useApi } from "../Functionality/ApiContext";

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
                      {!item ? (
                        <Error message="Error Fetching Data" />
                      ) : (
                        <Link
                          reloadDocument
                          to={`/AccuDaily/${category}/${
                            item.id
                          }/${item.multimedia[0]?.caption?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                        >
                          <div className="card">
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
                        </Link>
                      )}
                    </div>
                  ))}
                  {API?.slice(2, 3).map((item, index) => (
                    <div key={index}>
                      {!item ? (
                        <Error message="Error Fetching Data" />
                      ) : (
                        <Link
                          reloadDocument
                          to={`/AccuDaily/${category}/${
                            item.id
                          }/${item.multimedia[0]?.caption?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                        >
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
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="col-12 col-md-8 col-lg-8 order-1 order-sm-1 order-md-1 order-lg-2">
                  {API?.slice(3, 4).map((item, index) => (
                    <div key={index}>
                      {!item ? (
                        <Error message="Error Fetching Data" />
                      ) : (
                        <Link
                          reloadDocument
                          to={`/AccuDaily/${category}/${
                            item.id
                          }/${item.multimedia[0]?.caption?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                        >
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
                <div className="col-12 col-md-4 col-lg-4">
                  {API?.slice(4, 7).map((item, index) => (
                    <div key={index}>
                      {!item ? (
                        <Error message="Error Fetching Data" />
                      ) : (
                        <Link
                          reloadDocument
                          to={`/AccuDaily/${category}/${
                            item.id
                          }/${item.multimedia[0]?.caption?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                        >
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
                        </Link>
                      )}
                    </div>
                  ))}
                  {API?.slice(7, 8).map((item, index) => (
                    <div key={index}>
                      {!item ? (
                        <Error message="Error Fetching Data" />
                      ) : (
                        <Link
                          reloadDocument
                          to={`/AccuDaily/${category}/${
                            item.id
                          }/${item.multimedia[0]?.caption?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                        >
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
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="col-md-8 col-lg-8">
                  {API?.slice(8, 9).map((item, index) => (
                    <div key={index}>
                      {!item ? (
                        <Error message="Error Fetching Data" />
                      ) : (
                        <Link
                          reloadDocument
                          to={`/AccuDaily/${category}/${
                            item.id
                          }/${item.multimedia[0]?.caption?.replace(
                            /\s+/g,
                            "-"
                          )}`}
                        >
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
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 3 */}
              <div className="row gy-4">
                {API?.slice(9, 14).map((item, index) => {
                  return (
                    <div className="col-12 col-md-4" key={index}>
                      {!item ? (
                        <Error message="Error Fetching Data" />
                      ) : (
                        <Cards
                          category={category}
                          id={item.id}
                          item={
                            item.multimedia?.[0].caption?.replace(
                              /\s+/g,
                              "-"
                            ) || "Content Not Available"
                          }
                          img={
                            item.multimedia?.[0]?.url || "Content Not Available"
                          }
                          title={item.title}
                          abstract={item.abstract}
                          byline={item.byline}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* SIDE NEWS */}
        <div className="col-xs-12 col-md-12 col-lg-3 border-start order-2 order-md-2 order-lg-2">
          {API?.slice(15, 16).map((item, index) => (
            <div key={index}>
              {!item ? (
                <Error message="Error Fetching Data" />
              ) : (
                <Link
                  reloadDocument
                  to={`/AccuDaily/${category}/${
                    item.id
                  }/${item.multimedia[0]?.caption?.replace(/\s+/g, "-")}`}
                >
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
                </Link>
              )}
            </div>
          ))}
          {API?.slice(16, 24).map((item, index) => (
            <div key={index}>
              {!item ? (
                <Error message="Error Fetching Data" />
              ) : (
                <Link
                  reloadDocument
                  to={`/AccuDaily/${category}/${
                    item.id
                  }/${item.multimedia[0]?.caption?.replace(/\s+/g, "-")}`}
                >
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
                </Link>
              )}
            </div>
          ))}
          {API?.slice(25, 26).map((item, index) => (
            <div key={index}>
              {!item ? (
                <Error message="Error Fetching Data" />
              ) : (
                <Link
                  reloadDocument
                  to={`/AccuDaily/${category}/${
                    item.id
                  }/${item.multimedia[0]?.caption?.replace(/\s+/g, "-")}`}
                >
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
