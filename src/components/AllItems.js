import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-right: 50px;
`

const AllItems = ({items, addToBasket}) => {

  const listItems = items.map((item, index) => {
    return <Item index={index} item={item} addToBasket={addToBasket} key={index}/>
  })

  return (
    <ItemContainer>
      {listItems}
    </ItemContainer>
  )
}

export default AllItems;