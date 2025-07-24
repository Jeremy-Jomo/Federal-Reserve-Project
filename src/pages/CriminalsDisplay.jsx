import { useEffect, useState } from 'react';
import WantedCard from '../Components/WantedCard';
import SearchBar from '../Components/SearchBar';
import './Home.css'
function CriminalsDisplay() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [fieldFilter, setFieldFilter] = useState('');
  useEffect(() => {
    fetch('https://api.fbi.gov/wanted/v1/list')
      .then(res => res.json())
      .then(d => {
        setData(d.items);
        setFiltered(d.items);
      });
  }, []);
  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    const filteredData = data.filter(item =>
  item.title.toLowerCase().includes(lower) ||
  item.subjects?.some(s => s.toLowerCase().includes(lower))
).filter(item =>
  fieldFilter
    ? item.field_offices?.some(office =>
        office.toLowerCase() === fieldFilter.toLowerCase()
      )
    : true
);

  setFiltered(filteredData);
  }, [searchTerm, fieldFilter, data]);

  return (
    <div className="app">
      <h1>FBI Wanted List</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        fieldFilter={fieldFilter}
        setFieldFilter={setFieldFilter}
        fieldOptions={[...new Set(data.flatMap(item => item.field_offices || []))]}
      />
      <div className="card-container">
        {filtered.map(item => (
          <WantedCard key={item.uid} person={item} />
        ))}
      </div>
    </div>
  );
}

export default CriminalsDisplay;
