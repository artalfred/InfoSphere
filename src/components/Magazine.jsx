import React from "react";
import TitlePage from "./resusable/TitlePage";
import { Circles } from "react-loader-spinner";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";
import { useApi } from "./Functionality/ApiContext";

export default function Magazine() {
  const { magazine, isLoading, error } = useApi();

  return (
    <div>
      <div className="container-xxl p-2">
        {error ? (
          <Error message={error} />
        ) : (
          <>
            {isLoading ? (
              <div className="position-absolute top-50 start-50 translate-middle">
                <Circles
                  height="60"
                  width="60"
                  color="#e25720"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <>
                <TitlePage
                  title="Magazine"
                  country_1="MET GALA 2023"
                  country_2="VOGUE"
                  country_3="HARPER'S BAZAAR"
                  country_4="INSTYLE"
                />
                {/* SECTION 1 */}
                <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                  <Pages API={magazine} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
