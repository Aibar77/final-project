import search from "../../assets/icons/Search.png";
import { useNavigate } from "react-router-dom";
const Search = ({ searchValue, setSearchValue }) => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    navigate("/menu");
  };
  return (
    <div className="search-block">
      <input type="search" value={searchValue} onChange={handleSearch} />
      <img src={search} alt="search-icon" />
    </div>
  );
};

export default Search;
