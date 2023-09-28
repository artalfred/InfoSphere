function Content({ img, title, abstract, byline }) {
  return (
    <div className="card">
      <img src={img} className="img-fluid " alt="..." />
      <div className="card-body mt-3">
        <h6 className="fw-bold body-text">{title}</h6>
        <p className="text-secondary body-text lh-base p-0">{abstract}</p>
        <p className="text-muted mt-2" style={{ fontSize: "12px" }}>
          {byline}
        </p>
      </div>
    </div>
  );
}

export default Content;
