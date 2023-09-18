import React from "react";
import IsLoading from "./resusable/IsLoading";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";
import { useApi } from "./Functionality/ApiContext";

export default function Business() {
  const { business, isLoading, error } = useApi();

  return (
    <div>
      <div className="container-xxl p-2">
        {error ? (
          <Error message={error} />
        ) : (
          <>
            {isLoading ? (
              <IsLoading />
            ) : (
              <>
                <div
                  className="d-flex align-items-center mt-5"
                  style={{ borderBottom: "1px solid #555" }}
                >
                  <h1 className="display-6 pe-4" style={{ fontWeight: "900" }}>
                    Business
                  </h1>
                  <div className="scroll">
                    <span className="border-end pe-4 f-sm fs-3 fw-light">
                      U.S
                    </span>
                    <span className="border-end px-4 f-sm fs-3 fw-light">
                      Tech
                    </span>
                    <span className="border-end px-4 f-sm fs-3 fw-light">
                      Econ
                    </span>
                    <span className="border-end px-4 f-sm fs-3 fw-light">
                      Media
                    </span>
                    <span className="border-end px-4 f-sm fs-3 fw-light">
                      Money
                    </span>
                    <span className="border-end px-4 f-sm fs-3 fw-light">
                      DealBook
                    </span>
                  </div>
                </div>

                <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                  <Pages API={business} business={business} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
