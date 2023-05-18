import React from "react";

export default function Articles({ url, title, abstract, byline }) {
  return (
    <a href={url}>
      <div className="card ">
        <div className="card-body border-bottom mb-3">
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
