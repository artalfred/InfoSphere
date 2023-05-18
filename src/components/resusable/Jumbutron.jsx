export default function Jumbutron({ img, title, abstract, byline, url }) {
  return (
    <div className="col-12 col-md-6 mt-5">
      <a href={url}>
        <div
          className="h-100 p-5 border rounded-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="body-text text-light">{title}</h4>
          <p className="text-light body-text lh-base p-0">{abstract}</p>
          <p className="text-light mt-2" style={{ fontSize: "12px" }}>
            {byline}
          </p>
        </div>
      </a>
    </div>
  );
}
