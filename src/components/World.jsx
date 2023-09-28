import TitlePage from "./resusable/TitlePage";

import IsLoading from "./resusable/IsLoading";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";
import { useApi } from "./Functionality/ApiContext";

export default function World() {
  const { isWorldError, isWorldLoading, world } = useApi();

  return (
    <div className="container-xxl p-2">
      {isWorldError ? (
        <Error message={isWorldError} />
      ) : (
        <>
          {isWorldLoading ? (
            <IsLoading />
          ) : (
            <>
              <TitlePage
                title="World"
                country_1="NEWS AND CURRENT EVENTS"
                country_2="GEOGRAPHY AND TRAVEL"
                country_3="CULTURE AND TRADITIONS"
                country_4="GLOBAL USSUES"
              />

              {/* PAGES */}
              <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                <Pages API={world} world={world} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
