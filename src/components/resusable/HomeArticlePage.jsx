import { useParams } from "react-router";
import OtherNews from "./OtherNews";
import IsLoading from "./IsLoading";
import { useState, useEffect } from "react";
import { useApi } from "../Functionality/ApiContext";

function HomeArticlePage() {
  const { latestId, path } = useParams();

  const [newsPath, setNewsPath] = useState({});

  const { home, world, politics, business, sports, arts, magazine, isLoading } =
    useApi();

  useEffect(() => {
    if (path === "Latest") setNewsPath(home);
    if (path === "World") setNewsPath(world);
    if (path === "Politics") setNewsPath(politics);
    if (path === "Business") setNewsPath(business);
    if (path === "Sports") setNewsPath(sports);
    if (path === "Arts") setNewsPath(arts);
    if (path === "Magazine") setNewsPath(magazine);
  }, [home, politics, path, sports, business, arts, magazine, world]);

  return (
    <>
      <div className="container mt-5 hm-Artcle-Pg">
        {isLoading ? (
          <IsLoading />
        ) : (
          <>
            <h6 className="text-uppercase section">
              {newsPath[latestId]?.section}
            </h6>
            <h1 className="title">{newsPath[latestId]?.title}</h1>
            <h5 className="sub-title mt-3 fw-normal">
              {newsPath[latestId]?.abstract}
            </h5>
            <h6 className="text-muted mt-3 fw-normal">
              {newsPath[latestId]?.byline}
            </h6>

            <div>
              <img
                className="mt-4 w-100 h-100"
                src={newsPath[latestId]?.multimedia[0]?.url}
                alt={newsPath[latestId]?.title}
              />
            </div>

            <p className="mt-3 fst-italic">
              {newsPath[latestId]?.multimedia[0]?.caption}
            </p>
          </>
        )}
      </div>

      <div className="container-xxl mt-5">
        <OtherNews API={home} />
      </div>
    </>
  );
}

export default HomeArticlePage;
