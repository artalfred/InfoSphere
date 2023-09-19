import { useApi } from "../Functionality/ApiContext";

function Search({ width }) {
  const { form, setForm, submitSearch } = useApi();

  return (
    <form
      onSubmit={submitSearch}
      className="container-xxl position-absolute end-0"
      style={{ width: width }}
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
