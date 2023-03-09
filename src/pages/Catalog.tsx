import React from 'react';
import styled from "styled-components";
import Item from "../components/Item";
import img1 from "../assets/img/1.webp"

const CatalogWrapper = styled.main`
  min-height: 100vh;
  background: #f0fff1;
`

const products = {
    items: [
        {id: "1", img: img1, name: "iPhone 14 Pro Max", price: "1250$", description: "description1"},
        {id: "2", img: img1, name: "item2", price: "460$", description: "description2"},
        {id: "3", img: img1, name: "item3", price: "190$", description: "description3"},
        {id: "4", img: img1, name: "item4", price: "100$", description: "description4"},
        {id: "5", img: img1, name: "item5", price: "490$", description: "description5"}
    ]
}

const Catalog = () => {

    return (
        <CatalogWrapper>
            {products.items.map(e => <Item key={e.id} src={e.img} alt={'photo'} name={e.name} price={e.price} description={e.description}/>)}
        </CatalogWrapper>
    );
};

export default Catalog;