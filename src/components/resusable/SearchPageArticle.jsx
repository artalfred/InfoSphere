import { useParams } from "react-router";
import IsLoading from "./IsLoading";
import { useApi } from "../Functionality/ApiContext";
import { useState } from "react";
import SearchRelated from "./SearchRelated";

function SearchPageArticle() {
  const { articleId } = useParams();

  const { searchApiResults, isLoading } = useApi();

  const [id] = useState(articleId);

  return (
    <>
      <div className="container mt-5 hm-Artcle-Pg">
        {isLoading ? (
          <IsLoading />
        ) : (
          <>
            <h6 className="text-uppercase section">
              {searchApiResults[id]?.section_name}
            </h6>
            <h1 className="title">{searchApiResults[id]?.headline.main}</h1>
            <h5 className="sub-title mt-3 fw-normal">
              {searchApiResults[id]?.abstract}
            </h5>
            <h6 className="text-muted mt-3 fw-normal">
              {searchApiResults[id]?.byline?.original}
            </h6>

            <div>
              <img
                className="mt-4 w-100 h-100"
                src={`https://www.nytimes.com/${searchApiResults[id]?.multimedia[0]?.url}`}
                alt={searchApiResults[id]?.absract}
              />
            </div>

            <p className="mt-3 fst-italic">
              {searchApiResults[id]?.multimedia[0]?.caption}
            </p>
          </>
        )}
      </div>

      <div className="container-xxl mt-5">
        <SearchRelated />
      </div>
    </>
  );
}

export default SearchPageArticle;
