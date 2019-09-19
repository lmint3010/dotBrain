import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import { graphql, Link } from "gatsby"
import categoriesData from "../constants/categories"

import SEO from "../components/seo"
import Layout from "../components/layout"

const BlogList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(90% / 5);
    height: auto;
    margin: 1rem 1%;
    border-radius: 12px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
    transition: 150ms ease;

    &:hover {
        transform: scale(1.04);
    }
`

const BlogImageBox = styled.div`
    width: 100%;
    height: 150px;
    overflow: hidden;
`

const BlogImage = styled.div`
    width: 100%;
`

const BlogBody = styled.div`
    padding: 1rem;
`

const BlogCategory = styled.span`
    font-size: 13px;
    padding: 4px 8px;
    border-radius: 1rem;
    background: ${props => categoriesData[props.data].background};
    color: ${props => categoriesData[props.data].color};
`

const BlogTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;

    & a {
        color: inherit;
        text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
    }
`

const BlogTime = styled.div`
    font-size: 11.5px;
    font-weight: 400;
    color: gray;
    text-transform: capitalize;
`

const BlogExcerpt = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: gray;
`

const IndexPage = ({ data }) => {
    const { list } = data

    return (
        <>
            <SEO title="Welcome" />
            <Layout>
                <BlogList>
                    {list.blogs.map(({ blog }, i) => (
                        <BlogContainer key={i}>
                            <BlogImageBox>
                                <BlogImage>
                                    <Image
                                        loading="lazy"
                                        fluid={
                                            blog.frontmatter.featuredImage.img
                                                .fluid
                                        }
                                    />
                                </BlogImage>
                            </BlogImageBox>
                            <BlogBody>
                                <BlogCategory
                                    data={blog.frontmatter.categories}
                                >
                                    {
                                        categoriesData[
                                            blog.frontmatter.categories
                                        ].title
                                    }
                                </BlogCategory>
                                <BlogTime>{blog.frontmatter.date}</BlogTime>
                                <BlogTitle>
                                    <Link to={blog.fields.slug}>
                                        {blog.frontmatter.title}
                                    </Link>
                                </BlogTitle>
                                <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                            </BlogBody>
                        </BlogContainer>
                    ))}
                </BlogList>
            </Layout>
        </>
    )
}

export const blogs = graphql`
    {
        list: allMarkdownRemark {
            blogs: edges {
                blog: node {
                    frontmatter {
                        title
                        categories
                        date(
                            locale: "vi"
                            formatString: "dddd, Do MMMM YYYY --- hh:mm:ss"
                        )
                        featuredImage {
                            img: childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    timeToRead
                    excerpt
                    fields {
                        slug
                    }
                }
            }
            totalCount
        }
    }
`

export default IndexPage
