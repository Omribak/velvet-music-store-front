import React from 'react';
import styled from 'styled-components';
import CategoriesList from './CategoriesList';

const ProductsCategoriesContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroductionText = styled.p`
  margin: 0 auto;
  overflow-wrap: break-word;
  width: 30rem;
  text-align: center;

  @media only screen and (max-width: 540px) {
    width: 20rem;
  }

  @media only screen and (max-width: 420px) {
    width: 15rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

export const Line = styled.div`
  border: 1px solid red;
  background-color: rgb(190, 0, 0);
  opacity: 30%;
  height: 0.02rem;
  width: 20rem;

  @media only screen and (max-width: 1300px) {
    width: 10rem;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const TitleText = styled.h1`
  margin: 0;
  color: rgb(190, 0, 0);

  @media only screen and (max-width: 1300px) {
    width: 20rem;
  }
`;
const ProductsCategories = () => {
  return (
    <ProductsCategoriesContainer>
      <IntroductionText>
        Our store have the best products , with the lowest price , best customer
        service , top quality fine.We promise the products be delivered within
        14 days.
      </IntroductionText>
      <TitleWrapper>
        <Line />
        <TitleText>Velvet Rosa Products</TitleText>
        <Line />
      </TitleWrapper>
      <CategoriesList />
    </ProductsCategoriesContainer>
  );
};

export default ProductsCategories;
