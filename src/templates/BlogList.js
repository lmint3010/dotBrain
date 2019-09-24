import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

import { graphql, Link } from "gatsby"
import categoriesData from "../constants/categories"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Pagination from "../components/common/Pagination"

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
    background: white;

    &:hover {
        transform: scale(1.04);
    }

    @media (max-width: 1024px) {
        width: calc(94% / 3);
    }

    @media (max-width: 768px) {
        width: calc(96% / 2);
    }

    @media (max-width: 512px) {
        width: 98%;
    }
`

const BlogImageBox = styled.div`
    width: 100%;
    height: 160px;
    overflow: hidden;
    border-radius: 12px 12px 0 0;
`

const BlogImage = styled.div`
    width: 100%;
`

const BlogBody = styled.div`
    padding: 1rem;
`

const BlogCategory = styled.span`
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 2px;
    background: ${props => categoriesData[props.data].background};
    color: ${props => categoriesData[props.data].color};
    margin-right: 6px;
    white-space: nowrap;
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

const metaData = [
    {
        property: `og:image`,
        content:
            "https://dotbrainn.com/static/c1fa1ae7240bcb613286299a56a56db0/8179c/business_analyst.jpg"
    }
]

const IndexPage = ({ data }) => {
    const { blogs, pageInfo } = data.list

    return (
        <>
            <SEO title="Welcome" meta={metaData} />
            <Layout>
                <BlogList>
                    {blogs.map(({ blog }, i) => (
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
                                {blog.frontmatter.categories
                                    .split(",")
                                    .map((item, i) => (
                                        <BlogCategory
                                            key={i}
                                            data={item.trim()}
                                        >
                                            {categoriesData[item.trim()].title}
                                        </BlogCategory>
                                    ))}
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
                <Pagination pageInfo={pageInfo} />
            </Layout>
        </>
    )
}

export const blogs = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        list: allMarkdownRemark(
            sort: { fields: frontmatter___date }
            limit: $limit
            skip: $skip
        ) {
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
            pageInfo {
                currentPage
                hasNextPage
                hasPreviousPage
                itemCount
                pageCount
                perPage
            }
        }
    }
`

export default IndexPage
