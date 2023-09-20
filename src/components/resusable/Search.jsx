import { useApi } from "../Functionality/ApiContext";

function Search({ width, position = null }) {
  const { form, setForm, submitSearch } = useApi();

  return (
    <form
      onSubmit={submitSearch}
      className={`container-xxl ${position}`}
      style={{ width: width, background: "#fff" }}
    >
      <input
        type="text"
        className="form-control rounded-5 px-4 py-2"
        id="search"
        placeholder="Search"
        onChange={(e) => setForm(e.target.value)}
        value={form}
      />
    </form>
  );
}

export default Search;
