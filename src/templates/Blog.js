import React from "react"
import styled from "styled-components"
import { FacebookShareButton } from "react-share"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ScrollTopButton from "../components/common/ScrollTopBtn"
import SEO from "../components/seo"
import Image from "gatsby-image"

import authorData from "../constants/author"

const FeaturedImage = styled.div`
    width: 36vw;
    display: block;
    margin: 1rem 0;
    border-radius: 0.4rem;
    overflow: hidden;

    @media (max-width: 978px) {
        width: 100%;
    }
`

const BlogWrapper = styled.div`
    width: 52vw;
    background: white;
    display: block;
    margin: 1rem auto;
    font-size: 16px;
    text-shadow: 0.6px 0.6px 2px rgba(100, 100, 100, 0.16);
    line-height: 28px;
    padding: 1rem 2rem;
    box-shadow: 1px 1px 4px rgba(100, 100, 100, 0.12);

    h1 {
        font-size: 34px;
        margin: 2rem 0 0 0;

        @media (max-width: 976px) {
            font-size: 24px;
        }
    }

    h2,
    h3,
    h4 {
        font-size: 26px;
        color: rgba(100, 100, 100, 1);
    }

    h3 {
        font-size: 22px;
    }

    h4 {
        font-size: 18px;
    }

    blockquote {
        border-left: 4px solid orange;
        margin-left: 0;
        padding-left: 1rem;
        font-style: italic;
        color: rgba(100, 100, 100, 1);
    }

    @media (max-width: 976px) {
        width: 100vw;
        font-size: 13.5px;
        padding: 1rem 8px;
    }
`

const FbShareButton = styled(FacebookShareButton)`
    background: #4267b2;
    border: none;
    border-radius: 2px;
    color: white;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    cursor: pointer;
    margin: 1rem 0;

    & .icon {
        margin-right: 12px;
        font-size: 18px;
    }
`

const Author = styled.div`
    display: block;
    margin-left: auto;
    font-size: 14px;

    & a {
        text-decoration: none;
        color: dodgerblue;

        &:hover {
            text-decoration: underline;
        }
    }
`

export default ({ data }) => {
    const post = data.markdownRemark
    const site = data.site.siteMetadata
    const author = post.frontmatter.author

    const fbshare = (
        <FbShareButton url={`${site.url}/${post.fields.slug}`}>
            <span className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="text">Chia sẻ trên Facebook</span>
        </FbShareButton>
    )

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
            />
            <ScrollTopButton isDisplayBack />
            <Layout>
                <BlogWrapper>
                    <FeaturedImage>
                        <Image
                            loading="lazy"
                            width="100%"
                            fluid={post.frontmatter.featuredImage.img.fluid}
                        />
                    </FeaturedImage>
                    <h1>{post.frontmatter.title}</h1>
                    {fbshare}
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <Author>
                        Tác giả -{" "}
                        <a
                            href={authorData[author].facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {authorData[author].name}
                        </a>{" "}
                        from <b>{authorData[author].presentFor}</b>
                    </Author>
                    {fbshare}
                </BlogWrapper>
            </Layout>
        </>
    )
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            frontmatter {
                title
                description
                author
                featuredImage {
                    img: childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                url
            }
        }
    }
`
