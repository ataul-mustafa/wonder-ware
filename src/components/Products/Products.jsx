import React, { useContext, useEffect, useState } from 'react';
import Style from './Products.module.css';
import Footer from '../Home/Footer/Footer';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import products from '../../assets/data/products.json';
import ProductCard from './ProductCard';
import SearchAndFilters from '../Home/SearchAndFilters/SearchAndFilters';
import Header from '../Home/Header/Header';
import MobileNavBar from '../Home/MobileComp/MobileNavBar';
import BackButton from '../Home/MobileComp/BackButton';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPrds, setCurrentPrds] = useState(products);
  const [filterData, setFilterData] = useState({
    search: '',
    price: '',
    sortBy: '',
  });

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  let count = products.length;

  useEffect(() => {
    if (products.length >= (8 * currentPage - 8)) {
      let indexOfLastItem = currentPage * 8;
      const indexOfFirstItem = indexOfLastItem - 8;
      const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentPrds(currentProducts);
    } else {
      setCurrentPrds(products);
    }
  }, [currentPage, products]);

  useEffect(() => {
    let filteredProducts = currentPrds;

    if (filterData.search) {
      filteredProducts = filteredProducts.filter((product) =>
        (product.name).toLowerCase().includes(filterData.search.toLowerCase())
      );
    }

    if (filterData.price) {
      const [minPrice, maxPrice] = filterData.price.split('-').map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }

    if (filterData.sortBy) {
      const sortBy = filterData.sortBy;
      let sortCriteria;

      switch (sortBy) {
        case 'priceAscending':
          sortCriteria = (a, b) => a.price - b.price;
          break;
        case 'priceDescending':
          sortCriteria = (a, b) => b.price - a.price;
          break;
        case 'nameAscending':
          sortCriteria = (a, b) => a.name.localeCompare(b.name);
          break;
        case 'nameDescending':
          sortCriteria = (a, b) => b.name.localeCompare(a.name);
          break;
        default:
          sortCriteria = (a, b) => a.price - b.price || a.name.localeCompare(b.name);
      }

      filteredProducts = filteredProducts.sort(sortCriteria);
    }

    if(filterData.search || filterData.price || filterData.sortBy){
      setCurrentPrds(filteredProducts);
    }

  }, [filterData.search, filterData.price, filterData.sortBy]);

  return (
    <>
      <Header setFilterData={setFilterData} filterData={filterData} />
      <BackButton path={'/'} />
      <SearchAndFilters setFilterData={setFilterData} filterData={filterData} />
      {currentPrds.length > 0 ? (
        <div className={Style.productsContainer}>
          <div>
            {currentPrds.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className={Style.noProducts}>No products found</div>
      )}
      {count > 7 && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={8}
            totalItemsCount={products.length}
            onChange={setCurrentPageNo}
            nextPageText=">"
            prevPageText="<"
            firstPageText="1st"
            lastPageText="last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
      <MobileNavBar />
      <Footer />
    </>
  );
};

export default Products;
