import React from "react";
import styled from "styled-components"

function BasketItem({item, index}) {

    return ( 
        <li>
            <h3> {item.name} </h3> 
            <p> {item.productType} </p> 
            <p> {item.price} </p> 
        </li>
    )
}

export default BasketItem;