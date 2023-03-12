import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import Item from "../components/Item";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import ButtonComponent from "../components/ButtonComponent";

export type ProductsType = {
    items: ItemType[]
}

type ItemType = {
    id: string,
    img: string,
    name: string,
    price: number,
    description: string,
}

const CatalogWrapper = styled.div`
  min-height: 100vh;
  background: #f0fff1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 25px;
`

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Catalog = () => {

    const products = useSelector<AppRootStateType, ProductsType>(state => state.item)

    const maxPriceValue = products.items.reduce((acc, product) => {
        return product.price > acc ? product.price : acc
    }, Number.MIN_SAFE_INTEGER)
    const minPriceValue = products.items.reduce((acc, product) => {
        return product.price <= acc ? product.price : acc
    }, Number.MAX_SAFE_INTEGER)

    const [minPrice, setMinPrice] = useState(minPriceValue)
    const [maxPrice, setMaxPrice] = useState(maxPriceValue);

    const [filteredProducts, setFilteredProducts] = useState(products.items);

    const applyFilterHandler = () => {
        const filteredItems = products.items.filter(it => it.price >= minPrice && it.price <= maxPrice);
        setFilteredProducts(filteredItems);
    }

    const onChangeMinPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinPrice(parseInt(e.target.value))
    }

    const onChangeMaxPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(parseInt(e.target.value))
    }


    return (
        <>
            <FilterWrapper>
                Min price:
                <label>
                    <input type="number" value={minPrice} onChange={onChangeMinPriceHandler}/>
                </label>
                <label>
                    Max price:
                    <input type="number" value={maxPrice} onChange={onChangeMaxPriceHandler}/>
                </label>
                <ButtonComponent onClick={applyFilterHandler} name={"Apply Filter"}/>
            </FilterWrapper>
            <CatalogWrapper>
                {filteredProducts.map(e => <Item
                    key={e.id} src={e.img} alt={'photo'} name={e.name} price={e.price} description={e.description}/>)}
            </CatalogWrapper>
        </>
    );
};

export default Catalog;