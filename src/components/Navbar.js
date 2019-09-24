import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import logo from "../images/website/logo.svg"

const Wrapper = styled.div`
    padding: 4px 2rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10000;
    background: white;

    @media (max-width: 976px) {
        padding: 12px 1rem;
    }
`

const Logo = styled.img`
    height: 30px;
    width: auto;
    margin: 0 6px 0 0;
`

const LogoText = styled.div`
    font-size: 17px;
    color: gray;
    font-weight: 600;

    & span {
        color: #ffcb57;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: gray;
    font-size: 16px;
    font-weight: 500;
    margin: 0 1rem;
    padding: 2px 8px;
    border-radius: 2px;
    transition: 100ms ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &.normalLink:hover {
        background: rgba(240, 240, 240, 1);
    }

    @media (max-width: 976px) {
        margin: 0;
    }
`

const LeftBox = styled.div`
    display: block;
    margin-left: auto;
`

export default props => (
    <Wrapper>
        <NavLink to="/">
            <Logo src={logo} alt="dotBrainn.com" />
            <LogoText>
                dot<span>Brain</span>
            </LogoText>
        </NavLink>

        <LeftBox>
            <NavLink to="/about" className="normalLink">
                Tác giả
            </NavLink>
        </LeftBox>
    </Wrapper>
)
