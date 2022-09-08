function SearchBar({ pesquisa, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <>
      <label>Search</label>
      <input value={pesquisa} type="text" onChange={handleChange} />
    </>
  );
}
export default SearchBar;
