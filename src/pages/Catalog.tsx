import React from 'react';
import styled from "styled-components";
import Item from "../components/Item";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {TestType} from "../state/item-reducer";

const CatalogWrapper = styled.main`
  min-height: 100vh;
  background: #f0fff1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 25px;
`

const Catalog = () => {

    const products = useSelector<AppRootStateType, TestType>(state => state.item.products)

    return (
        <CatalogWrapper>
            {products.items.map(e => <Item key={e.id} src={e.img} alt={'photo'} name={e.name} price={e.price} description={e.description}/>)}
        </CatalogWrapper>
    );
};

export default Catalog;