export default function TitlePage({
  title,
  country_1,
  country_2,
  country_3,
  country_4,
}) {
  return (
    <div className="d-grid align-items-center">
      <h1 className="mt-5 display-6" style={{ fontWeight: "900" }}>
        {title}
      </h1>
      <h6
        className="fw-light border-top fs-xs py-2"
        style={{ borderBottom: "1px solid #555" }}
      >
        <span className="border-end pe-2 f-xxs">{country_1}</span>
        <span className="border-end px-2 f-xxs">{country_2}</span>
        <span className="border-end px-2 f-xxs">{country_3}</span>
        <span className="border-end px-2 f-xxs">{country_4}</span>
      </h6>
    </div>
  );
}
