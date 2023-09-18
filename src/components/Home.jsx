import "../style/home.css";
import "../style/style.css";
import TitlePage from "./resusable/TitlePage";

import IsLoading from "./resusable/IsLoading";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";
import { useApi } from "./Functionality/ApiContext";

export default function Home() {
  const { home, isLoading, error } = useApi();

  return (
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
                title="Latest"
                country_1="U.S"
                country_2="ASIA"
                country_3="EUROPE"
                country_4="CANADA"
              />

              {/* PAGES */}
              <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                <Pages API={home} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
