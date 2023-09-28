import Error from "./resusable/Error";
import IsLoading from "./resusable/IsLoading";
import { Link } from "react-router-dom";
import { useApi } from "./Functionality/ApiContext";

function SearchPage() {
  const { isResultsError, isResultsLoading, searchApiResults, form } = useApi();

  return (
    <div className="container mt-5 hm-Artcle-Pg">
      {isResultsError ? (
        <Error message={isResultsError} />
      ) : isResultsLoading ? (
        <IsLoading />
      ) : (
        <>
          <div>
            <h5>AccuDaily Topics: {form}</h5>

            <h6 className="fw-normal text-secondary">
              News about {form}, including commentary and archival articles
              published in AccuDaily.
            </h6>

            <h6 className="fw-light f-xs mt-3 mb-5">
              Showing {searchApiResults.length} results for: {form}
            </h6>
          </div>

          {searchApiResults?.map((item) => {
            const dateString = item.pub_date;
            const dateObject = new Date(dateString);

            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = dateObject.toLocaleDateString(
              "en-US",
              options
            );

            return (
              <Link
                reloadDocument
                to={`/article/${item.id}/${item.headline.main.replace(
                  /\s+/g,
                  "-"
                )}`}
                key={item.id}
              >
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2  py-4 border-top gy-4">
                  <div className="col col-lg-8 order-2 order-sm-2 order-md-1 search-width">
                    <div>
                      <h4 className="body-text">{item.headline.main}</h4>
                      <p>{item.snippet}</p>
                      <p className="f-xxs">{item.byline.original}</p>
                      <p className="f-xs mt-5 date">{formattedDate}</p>
                    </div>
                  </div>

                  <div className="col col-lg-4 order-1 order-sm-1 order-md-2 search-width">
                    <img
                      style={{
                        height: "11rem",
                        width: "100%",
                      }}
                      src={`https://www.nytimes.com/${item.multimedia[0]?.url}`}
                      alt={item.headline.main}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SearchPage;
