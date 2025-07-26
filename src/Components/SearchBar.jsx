// src/components/SearchBar.jsx
import './SearchBar.css';
import { Link } from "react-router-dom";

function SearchBar({ searchTerm, setSearchTerm, fieldFilter, setFieldFilter, fieldOptions }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter Name or Crime..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select value={fieldFilter} onChange={e => setFieldFilter(e.target.value)}>
        <option value="">All Field Offices</option>
        {fieldOptions.map(opt => (
          <option key={opt} value={opt}>{opt.toLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
