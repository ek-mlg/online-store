import React from 'react';
import ButtonComponent from "./ButtonComponent";

type ItemPropsType = {
    src: string,
    alt: string,
    name: string,
    price: string,
    description: string
}

const Item:React.FC<ItemPropsType> = (props) => {
    const {src, alt, name, price, description} = props
    return (
        <div>
            <img src={src} alt={alt}/>
            <span>{name}</span><br/>
            <span>{price}</span><br/>
            <span>{description}</span><br/>
            <ButtonComponent name={'Buy'}/>
        </div>
    );
};

export default Item;