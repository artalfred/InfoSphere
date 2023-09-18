import TitlePage from "./resusable/TitlePage";
import IsLoading from "./resusable/IsLoading";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";
import { useApi } from "./Functionality/ApiContext";

export default function Arts() {
  const { arts, isLoading, error } = useApi();

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
                  title="Arts"
                  country_1="ART CRITICISM AND REVIEWS"
                  country_2="ART EDUCATION"
                  country_3="MUSICAL ARTS"
                  country_4="STREET ARTS"
                />
                {/* SECTION 1 */}
                <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                  <Pages API={arts} arts={arts} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
