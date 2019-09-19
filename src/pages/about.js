import React from "react"
import styled from "styled-components"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Author from "../components/About/Author"
import Certificate from "../components/About/Certificate"
import Explaination from "../components/About/Explaination"
import ScrollTop from "../components/common/ScrollTopBtn"

const Wrapper = styled.div`
    padding: 1rem;
    max-width: 50vw;
    margin: 0 auto;
    display: block;
`

export default ({ data }) => {
    return (
        <Layout>
            <ScrollTop isDisplayBack />
            <Wrapper>
                <Author data={data} />
                <Certificate data={data} />
                <Explaination data={data} />
            </Wrapper>
        </Layout>
    )
}

export const imageFragment = graphql`
    fragment imageFragment on File {
        img: childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

export const query = graphql`
    query {
        authorImg: file(relativePath: { eq: "author.jpg" }) {
            ...imageFragment
        }
        time_manage_certificate: file(
            relativePath: { eq: "time_management_certificate.png" }
        ) {
            ...imageFragment
        }
        gatsby_astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            ...imageFragment
        }
    }
`
