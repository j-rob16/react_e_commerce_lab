import React from "react";
import AllItems from "../components/AllItems"
import styled from "styled-components"

const Title = styled.h1`
  text-alight: center;
`

const ShopContainer = ({items, addToBasket}) => {
  return (
      <>

        <AllItems items={items} addToBasket={addToBasket}/>
      </>
    )
}

export default ShopContainer;