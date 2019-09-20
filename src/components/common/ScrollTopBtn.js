import React from "react"
import styled from "styled-components"
import { faHome, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ActionButton = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    @media (max-width: 768px) {
        display: none;
    }
`

const BackBtn = styled(Link)`
    border: none;
    background: dodgerblue;
    color: white;
    font-size: 18px;
    font-weight: 700;
    padding: 8px 20px;
    border-radius: 1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 100ms ease;
`

const ScrollTopButton = styled.button`
    border: none;
    background: dodgerblue;
    color: white;
    font-size: 18px;
    font-weight: 700;
    padding: 8px 20px;
    border-radius: 1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 100ms ease;
    margin-top: 8px;
`

const _handleScrollTop = speed => () => {
    if (window.scrollY !== 0) {
        setTimeout(function() {
            window.scrollTo(0, window.scrollY - 30)
            _handleScrollTop(speed)()
        }, speed)
    }
}

const Component = ({ isDisplayBack, speed = 4 }) => (
    <ActionButton>
        {isDisplayBack && (
            <BackBtn to="/">
                <FontAwesomeIcon icon={faHome} />
            </BackBtn>
        )}
        <ScrollTopButton onClick={_handleScrollTop(speed)}>
            <FontAwesomeIcon icon={faAngleDoubleUp} />
        </ScrollTopButton>
    </ActionButton>
)

export default Component
