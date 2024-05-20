import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the desired icon component
import Style from './SearchBar.module.css';

function SearchInput({filterData, setFilterData}) {

  const onSearchChange = async (e) => {
    const filterValue = e.target.value;
    const name = e.target.name;

    filterData[name] = filterValue;
    setFilterData({...filterData, [name]: filterValue})
  }

  return (
    <div className={Style.searchContainer}>
      <input type="text" name='search' onChange={onSearchChange} placeholder="Search products..." />
      <FaSearch />
    </div>
  );
}

export default SearchInput;
