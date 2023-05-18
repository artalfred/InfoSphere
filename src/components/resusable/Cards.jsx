import React from "react";

export default function Cards({ img, title, abstract, byline, url }) {
  return (
    <a href={url}>
      <div className="card">
        <img src={img} className="img-fluid img_size_sm" alt="..." />
        <div className="card-body mt-3">
          <h6 className="fw-semibold body-text">{title}</h6>
          <p className="text-secondary body-text lh-base p-0">{abstract}</p>
          <p className="text-muted mt-2" style={{ fontSize: "12px" }}>
            {byline}
          </p>
        </div>
      </div>
    </a>
  );
}
