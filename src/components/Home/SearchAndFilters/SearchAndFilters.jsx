import React from 'react'
import Style from './SearchAndFilter.module.css'
import SearchBar from './SearchBar'

const SearchAndFilters = ({filterData, setFilterData}) => {

  const onFilterChange = async (e, filterName) => {
    const filterValue = e.target.value;

    filterData[filterName] = filterValue;
    setFilterData({...filterData, [filterName]: filterValue})

  }

  return (
    <div className={Style.filterWrapper} >
      <SearchBar setFilterData={setFilterData} filterData={filterData} /> 
      <div className={Style.filters}>
        <div>
          <select onChange={(e) => { onFilterChange(e, 'price') }}>
            <option value="">Price</option>
            <option value="" disabled>Featured</option>
            <option value="0-500" >₹0 - ₹500</option>
            <option value="500-1000" >₹500 - ₹1000</option>
            <option value="1000-5000" >₹1000 - ₹5000</option>
            <option value="5000-10000" >₹5000 - ₹10000</option>
            <option value="10000-50000" >₹10000 - ₹50000</option>
          </select>
          <select onChange={(e) => { onFilterChange(e, 'sortBy') }}>
            <option value="" >Sort By </option>
            <option value="" disabled>Featured</option>
            <option value="priceAscending" >Price : Lowest</option>
            <option value="priceDescending" >Price : Highest</option>
            <option value="nameAscending" >Name : (A-Z)</option>
            <option value="nameDescending" >Name : (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchAndFilters
