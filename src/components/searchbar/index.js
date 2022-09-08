function SearchBar({ pesquisa, setSearch, checkBox, setCheckBox }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  function changeSelect(e) {
    setCheckBox(!checkBox);
  }
  return (
    <>
      <label>Search</label>
      <input value={pesquisa} type="text" onChange={handleChange} />
      <label>Filtrar só produtos em estoque</label>
      <input type="checkbox" onClick={changeSelect}></input>
    </>
  );
}
export default SearchBar;
