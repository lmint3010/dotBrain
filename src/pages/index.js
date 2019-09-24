import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`

const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    margin: 0 0 8px 0;
`

const Subtitle = styled.p`
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
`

const ListLink = styled.div`
    display: flex;
`

const Link2 = styled(Link)`
    font-size: 16px;
    border: 1px solid rgba(200, 200, 200, 0.4);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    padding: 4px 1rem;
    transition: 200ms ease;
    margin: 0 4px;

    &:hover {
        border-color: #ffcb57;
        border-style: solid;
        background: #ffcb57;
        color: rgba(50, 50, 50, 1);
    }
`

const Author = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 0 1rem 0;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
`

const IndexPage = ({ data }) => {
    const metaData = [
        {
            property: `og:image`,
            content:
                "https://dotbrainn.com/static/c1fa1ae7240bcb613286299a56a56db0/8179c/business_analyst.jpg"
        }
    ]

    return (
        <>
            <SEO title="Welcome" meta={metaData} />
            <Wrapper>
                <Author>
                    <Image fluid={data.authorImg.img.fluid} />
                </Author>
                <Title>
                    Tui là Lmint{" "}
                    <span role="img" aria-label="say-hi">
                        ️✌️
                    </span>
                </Title>
                <Subtitle>Cảm ơn vì đã ghé thăm dotBrainn của tớ</Subtitle>
                <ListLink>
                    <Link2 to="/blog">Xem bài viết</Link2>
                    <Link2 to="/about">
                        Tác giả{" "}
                        <span role="img" aria-label="kiss-face">
                            ❤️
                        </span>
                    </Link2>
                </ListLink>
            </Wrapper>
        </>
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
    }
`

export default IndexPage
