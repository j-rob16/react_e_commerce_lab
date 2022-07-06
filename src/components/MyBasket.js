import React from "react";
import BasketItem from "./BasketItem"
import CheckOutBar from "./CheckOutBar"

const MyBasket = ({basketItems, checkOut}) => {

  const basketTotal = basketItems.reduce((prev, item) => {
    return prev += item.price;
  }, 0)
    
  const listItems = basketItems.map((basketItem, index) => {
    return <BasketItem index={index} item={basketItem} key={index}/>
  })
    
    return (
        <>
            <ul>
                {listItems}
            </ul>
            <CheckOutBar checkOut={checkOut} total={basketTotal}/>
        </>
    )
}

export default MyBasket;