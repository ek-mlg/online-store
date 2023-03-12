import React from 'react';
import styled from "styled-components";

const ItemContainer = styled.div`
  background: coral;
  width: 250px;
`

const ImgContainer = styled.div`
  width: 250px;
  height: 250px;
  background: aliceblue;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`

const StyledImg = styled.img`
  height: 250px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Price = styled.span`
  font-size: 20px;
  color: #001a34;
  font-weight: 700;
  line-height: 26px;
`

const Name = styled.span`
  font-size: 16px;
  color: #001a34;
  font-weight: 400;
  line-height: 20px;
`



type ItemPropsType = {
    src: string,
    alt: string,
    name: string,
    price: number,
    description: string,
}

const Item: React.FC<ItemPropsType> = (props) => {

    const {src, alt, name, price, description} = props


    return (
        <ItemContainer>
            <ImgContainer>
                <StyledImg src={src} alt={alt}/>
            </ImgContainer>
            <InfoContainer>
                <Price>{price}</Price>
                <Name>{name}</Name>
                <span>{description}</span>
            </InfoContainer>
        </ItemContainer>
    );
};

export default Item;