import Cards from "./Cards";

function OtherNews({ API, category }) {
  return (
    <div className="row gy-4 border-bottom mt-3 pb-4">
      <h3 className="fw-bold body-text">World</h3>
      {API?.slice(4, 12).map((item, index) => {
        return (
          <div className="col-12 col-md-3" key={index}>
            <Cards
              category={category}
              id={item.id}
              img={item.multimedia?.[0]?.url || "Hello"}
              title={item.title}
              abstract={item.abstract}
              byline={item.byline}
            />
          </div>
        );
      })}
    </div>
  );
}

export default OtherNews;
