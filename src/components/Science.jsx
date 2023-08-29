import React from "react";
import TitlePage from "./resusable/TitlePage";
import IsLoading from "./resusable/IsLoading";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";

export default function Science({ Science, isLoading, error }) {
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
                <TitlePage
                  title="Science"
                  country_1="CLIMATE"
                  country_2="SPACE & ASTRONOMY"
                  country_3="HEALTH"
                  country_4="CORONAVIRUS OUTBREAK"
                />
                <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                  <Pages API={Science} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
