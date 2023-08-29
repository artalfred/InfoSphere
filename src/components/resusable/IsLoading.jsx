import { Circles } from "react-loader-spinner";

function IsLoading() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Circles
        height="60"
        width="60"
        color="#e25720"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default IsLoading;
