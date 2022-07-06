import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    list-style: none;
    border: .5px solid grey;
    border-radius: 3px;
    text-align: center;
    margin: 5px;
    padding-bottom: 20px;
`

const Button = styled.button`
    & {color: #fff;
    background-color: navy;
    padding: 10px;
    border-radius: 3px;}
    &:hover {
        background-color: #fff;
        color: navy;
    }
`


function Item({item, index, addToBasket}) {

    const onClick = (evt) => {
        addToBasket(evt.target.value)
    }

    return (
        <ListItem>
            <h3>
                {item.name}
            </h3>
            <p>
                {item.productType}
            </p>
            <p>
                {item.price}
            </p>
            <Button value={index} onClick={onClick}>Add to My Basket</Button>
        </ListItem>
    )
}

export default Item;