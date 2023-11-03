import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
border: 1px solid #e1e1e1;
border-radius: 4px;
padding: 16px;
text-align: center;
background-color: #fff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: transform 0.2s;
&:hover {
  transform: scale(1.05);
}
width: 24%;
margin: 46px;
cursor:pointer

`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #777;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Product = ({ product }) => {
  return (
    <ProductWrapper>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductWrapper>
  );
};

export default Product;
