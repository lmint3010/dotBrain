import React from "react"
import styled from "styled-components"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import ScrollTopButton from "../components/common/ScrollTopBtn"
import SEO from "../components/seo"
import Image from "gatsby-image"

const FeaturedImage = styled.div`
    width: 30vw;
    display: block;
    margin: 1rem auto;
    border-radius: 1rem;
    overflow: hidden;
`

const BlogWrapper = styled.div`
    width: 74vw;
    display: block;
    margin: 1rem auto;
`

export default ({ data }) => {
    const post = data.markdownRemark

    return (
        <>
            <SEO title={post.frontmatter.title} />
            <ScrollTopButton isDisplayBack />
            <Layout>
                <BlogWrapper>
                    <FeaturedImage>
                        <Image
                            loading="lazy"
                            width="200px"
                            fluid={post.frontmatter.featuredImage.img.fluid}
                        />
                    </FeaturedImage>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </BlogWrapper>
            </Layout>
        </>
    )
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                featuredImage {
                    img: childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
