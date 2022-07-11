import "./searchbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          className="inpt-search"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link
                key={key}
                className="dataItem"
                to={`/${value.category}/${value.id}`}
              >
                <img
                  alt={value.ttile}
                  src={value.poster}
                  className="imgResult"
                />
                <p>
                  {value.title} <strong>{value.language}</strong>{" "}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
