import "./search-panel.css";
import { useState } from "react";

const SearchPanel = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchStr(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={searchStr}
      onChange={handleChange}
    />
  );
};

export default SearchPanel;
