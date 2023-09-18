import { Link } from "react-router-dom";
import { useApi } from "../Functionality/ApiContext";

function SearchRelated() {
  const { searchApiResults } = useApi();

  return (
    <div className="row gy-4 border-bottom mt-3 pb-4">
      <h3 className="fw-bold body-text">World</h3>
      {searchApiResults?.slice(4, 12).map((item) => {
        return (
          <div className="col-12 col-md-3" key={item.id}>
            <Link
              reloadDocument
              to={`/article/${item.id}/${item.headline.main.replace(
                /\s+/g,
                "-"
              )}`}
            >
              <div className="card">
                <img
                  src={`https://www.nytimes.com/${item.multimedia[0]?.url}`}
                  className="img-fluid img_size_sm"
                  alt={item.headline.main}
                />
                <div className="card-body mt-3">
                  <h6 className="fw-semibold body-text">
                    {item.headline.main}
                  </h6>
                  <p className="text-secondary body-text lh-base p-0">
                    {item.abstract}
                  </p>
                  <p className="text-muted mt-2" style={{ fontSize: "12px" }}>
                    {item.byline.original}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SearchRelated;
