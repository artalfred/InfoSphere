import TitlePage from "./resusable/TitlePage";
import IsLoading from "./resusable/IsLoading";
import Pages from "./resusable/Pages";
import Error from "./resusable/Error";

export default function Sports({ Sports, isLoading, error }) {
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
                  title="Sports"
                  country_1="M.L.B"
                  country_2="N.F.L"
                  country_3="COLLEGE FOOTBALL"
                  country_4="BASKETBALL"
                />
                {/* SECTION 1 */}
                <div className="row gx-5 mt-4" style={{ height: "auto" }}>
                  <Pages API={Sports} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
