import React from "react"
import styled from "styled-components"
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import paginationArrayGenerator, {
    type as _type
} from "../../utils/helpers/paginationArrayGenerator"

const Wrapper = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
`

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 30vw;
    transition: 200ms ease;
    border-bottom: 1px dashed transparent;

    &:hover {
        border-bottom: 1px dashed mediumseagreen;
    }

    @media (max-width: 768px) {
        max-width: 98vw;
    }
`

const Block = styled(Link)`
    border: 2px solid rgba(250, 250, 250, 0.2);
    cursor: pointer;
    font-size: 16px;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    border-radius: 4px;
    text-decoration: none;
    color: inherit;

    &.active {
        color: mediumseagreen;
    }

    &:hover {
        background: rgba(246, 246, 246, 1);
        border-top-color: mediumseagreen;
        font-size: 20px;
    }
`

const Root = styled(Block)`
    font-weight: 700;
`

export default ({ pageInfo }) => {
    const { pageCount: totalPages, currentPage } = pageInfo
    const paginationArrayData = paginationArrayGenerator(
        totalPages,
        currentPage
    )

    return (
        <>
            {totalPages > 1 ? (
                <Wrapper>
                    <Box>
                        {paginationArrayData.map(({ type, value }, i) => {
                            const isActive =
                                currentPage === value ? "active" : ""

                            switch (type) {
                                case _type.rootstart:
                                    return (
                                        <Root key={i} to="/blog">
                                            {value}
                                        </Root>
                                    )
                                case _type.rootend:
                                    return (
                                        <Root
                                            key={i}
                                            to={`/blog/${totalPages}`}
                                        >
                                            {value}
                                        </Root>
                                    )
                                case _type.left:
                                    return (
                                        <Block
                                            key={i}
                                            to={`/blog/${currentPage - 1}`}
                                        >
                                            <FontAwesomeIcon
                                                icon={faChevronLeft}
                                            />
                                        </Block>
                                    )
                                case _type.right:
                                    return (
                                        <Block
                                            key={i}
                                            to={`/blog/${currentPage + 1}`}
                                        >
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                            />
                                        </Block>
                                    )
                                case _type.page:
                                default:
                                    return (
                                        <Block
                                            key={i}
                                            to={
                                                value === 1
                                                    ? `/blog`
                                                    : `/blog/${value}`
                                            }
                                            className={isActive ? "active" : ""}
                                        >
                                            {value}
                                        </Block>
                                    )
                            }
                        })}
                    </Box>
                </Wrapper>
            ) : null}
        </>
    )
}
