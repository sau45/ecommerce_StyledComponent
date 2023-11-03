import React from 'react';
import styled from 'styled-components';
import Product from '../../Component/product/Product';

const ProductListWrapper = styled.div`
display: flex;
`;

const ProductList = ({ products, currentPage, productsPerPage }) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products?.slice(startIndex, endIndex);

  return (
    <ProductListWrapper>
    {displayedProducts?.slice(0,3)?.map((product, index) => (
      <Product key={index} product={product} />
    ))}
  </ProductListWrapper>

  );
};

export default ProductList;
