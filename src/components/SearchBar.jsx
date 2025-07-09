export function SearchBar({ searchWord, setSearchWord, handleSearchBtn }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search word"
        className="search"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      ></input>
      <button className="btn" onClick={handleSearchBtn}>
        Search
      </button>
    </div>
  );
}
