import React, { useContext } from "react";
import { SearchYoutube } from "../../../../../api/youtubeSearch";
import { SearchContext } from "../../../../../context/searchContext";
import { YoutubeDataContext } from "../../../../../context/youtubeData";
import SearchIcon from "../SearchIcon";

const SearchInput = () => {
  const [search, setSearch] = useContext(SearchContext);
  const [, dispatchData] = useContext(YoutubeDataContext);

  const handleSearch = () => {
    if(search.length) {
      dispatchData({ type: 'startFetch'})
      SearchYoutube(search)
        .then(response => {
          dispatchData({ type: 'fetchSuccess', payload: response.data})
        })
        .catch(() => dispatchData({ type: 'fetchFailed'}))
    };
  }
  const handleSearchOnEnter = e => {
    if (e.key === 'Enter') handleSearch();
  }
  
  return (
    <div className="search-input">
      <input type="text" name="text" value={search} onKeyDown={handleSearchOnEnter} onChange={e => setSearch(e.target.value)} />
      {
        search.length ? <span className="search-clear" onClick={() => setSearch('')}>X</span> : null
      }
      <div className="search-icon" onClick={handleSearch}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
