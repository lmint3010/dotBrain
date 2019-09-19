import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const Wrapper = styled.div`
    padding: 12px 2rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;

    @media (max-width: 976px) {
        padding: 12px 1rem;
    }
`

const Dot = styled.span`
    font-size: 20px;
    color: gray;
    font-weight: 700;
    user-select: none;
`

const Brain = styled.span`
    font-size: 32px;
    color: dodgerblue;
    font-weight: 800;
    user-select: none;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: gray;
    font-size: 16px;
    font-weight: 600;
    margin: 0 1rem;

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
            <Dot>dot</Dot>
            <Brain>Brain</Brain>
        </NavLink>

        <LeftBox>
            <NavLink to="/about">Giới thiệu</NavLink>
        </LeftBox>
    </Wrapper>
)
