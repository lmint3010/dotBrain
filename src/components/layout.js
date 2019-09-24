/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navbar from "./Navbar"

import "./layout.css"

const Wrapper = styled.div`
    padding: 4rem 1rem 1rem;

    @media (max-width: 978px) {
        padding: 4rem 0 1rem 0;
    }
`

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Wrapper>{children}</Wrapper>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
