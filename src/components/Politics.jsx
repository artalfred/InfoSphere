import React from "react";
import TitlePage from "./resusable/TitlePage";
import IsLoading from "./resusable/IsLoading";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";

export default function Politics({ Politics, isLoading, error }) {
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
                  title="Politics"
                  country_1="U.S"
                  country_2="ASIA"
                  country_3="WORLD"
                  country_4="EUROPE"
                />

                <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                  <Pages API={Politics} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
