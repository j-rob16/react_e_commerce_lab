import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = styled.h2`
    text-align: center;
    background-color: dodgerblue;
    margin: 0;
    padding: 40px;
`

const NavContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: paleturquoise;
    margin: 0;
`

const NavItem = styled.li`
    list-style: none;
    padding: 20px;
    margin: 0;
`

function NavBar() {
  return (
    <>        
        <Header>E-Commerce Store</Header>
        <NavContainer>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/my-basket">My Basket</Link>
            </NavItem>
        </NavContainer>
    </>
  )
}

export default NavBar;