function SideNews({ API }) {
  return (
    <div className="col-xs-12 col-md-12 col-lg-3 border-start order-2 order-md-2 order-lg-2">
      {API?.slice(5, 6).map((item, index) => (
        <div key={index}>
          <a href={item.url}>
            <div className="card ">
              <img
                src={item.multimedia?.[0]?.url || "Hello"}
                className="img-fluid"
                alt="..."
              />
              <div className="card-body p-0 border-bottom mt-3">
                <h6 className="fw-semibold body-text">{item.title}</h6>
                <p className="text-secondary body-text lh-base p-0">
                  {item.abstract}
                </p>
                <p className="text-muted mt-2" style={{ fontSize: "12px" }}>
                  {item.byline}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default SideNews;
