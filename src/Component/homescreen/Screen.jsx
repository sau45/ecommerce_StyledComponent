import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../productlist/Productlist';
import Pagination from '../pagination/Pagination';
import styled from 'styled-components';
import ImageCarousel from '../crousel/ImageCarousel ';

const ScreenWrapper = styled.div`
   width:121%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterSelect = styled.select`
  
  width: 100%;
  max-width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px;
`;
const SortByCategory = styled.p`
  margin: 0;
`;
const SortByPrice = styled.p`
  margin: 0;
`;

export default function Screen() {
  const [ProductData, setProductData] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [sortType, setSortType] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; 

  useEffect(() => {
    
    async function fetchDataAndSetData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProductData(response.data); 
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setProductData(null);
        setFilteredProducts(null); 
      }
    }
    fetchDataAndSetData();
  }, []);

  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

  const handleFilter = (attribute, value) => {
    if (value !== 'All') {
      const filtered = ProductData?.filter((product) => product[attribute] === value);
      setFilteredProducts(filtered);
    } else {
     
      setFilteredProducts(ProductData);
    }
  };

  const handleSort = (type) => {
    setSortType(type);
    const sorted = [...filteredProducts];

    if (type === 'price-low-to-high') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === 'price-high-to-low') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  return (
    <ScreenWrapper>
      {ProductData !== null ? (
        <>
        <ImageCarousel data={ProductData}/>
          <Header>Product List</Header>
          <FilterWrapper>
          <SortByCategory>Sort by Category:</SortByCategory>
            <FilterSelect onChange={(e) => handleFilter('category', e.target.value)}>
              <option value="All">All</option>
              <option value="electronics">Electronics</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelry</option>
              <option value="women's clothing">Women's Clothing</option>
          
            </FilterSelect>
            <SortByPrice>Sort by Price:</SortByPrice>
            <FilterSelect onChange={(e) => handleSort(e.target.value)}>
              <option value="default">{sortType}</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </FilterSelect>
          </FilterWrapper>
          <ProductList products={filteredProducts} currentPage={currentPage} productsPerPage={productsPerPage} />
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </>
      ) : (
        <div className="loading" style={{position: "relative",
    display: "block",
    top: "108px",
    right:" -402px",
    margin: "auto"}}>Loading ..... </div>
      )}
    </ScreenWrapper>
  );
}
